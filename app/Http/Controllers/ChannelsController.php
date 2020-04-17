<?php

namespace App\Http\Controllers;
use App\Channels;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
class ChannelsController extends Controller
{
    public function saveChannel(Request $request){
        $user = json_decode(auth()->user(), true);
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'link' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
                return response()->json($validator->errors()->toJson(), 400);
        }
        $channel = Channels::create([
            'user_id' => $user['id'],
            'name' => $request->get('name'),
            'link' => $request->get('link'),
        ]);
        return response()->json(
            DB::table('channels')
            ->where('user_id', $user['id'])
            ->get()
        );
    }

    public function getListOfChannels(){
        $user = json_decode(auth()->user(), true);
        $arr = DB::table('channels')
        ->where('user_id', $user['id'])
        ->get();
        return response()->json($arr);
    }

    public function deleteChannel($id){
        $user = json_decode(auth()->user(), true);
        $channel = Channels::find($id);
        $channel_to_delete = json_decode($channel,true);
        if($user['id'] != $channel_to_delete['user_id']){
            return response()->json('Permission denied!');
        }
        $channel->delete();
        return response()->json(
            DB::table('channels')
            ->where('user_id', $user['id'])
            ->get()
        );
    }

    public function returnChannelsContent(){
        $user = json_decode(auth()->user(), true);
        $links = DB::table('channels')
        ->where('user_id', $user['id'])
        ->get();
        $links = json_decode($links, true);
        $html = "";
        foreach ($links as $k => $channel) {
            try {
                $html .= (string) $this->prettifyData($channel);
            } catch (Exception $e) {
                $html .= '<br/> <h1> Something goes wrong with '. $channel['name'] . '!</h1> ';
            }
        }
        return  $html;
    }

    private function prettifyData($channel)
    {
        $response = '';
        $data = simplexml_load_file($channel['link'], 'SimpleXMLElement', LIBXML_NOCDATA);
        $array = json_decode(json_encode((array) $data), TRUE);
        $array = $array['channel'];
        $title = $array['title'];
        $response .= ' <h3> --- Channel: ' . $title . ' --- </h3>';
        $description = $array['description'];
        $response .= ' <h5> Description: ' . $description . '</h5>';
        $link = $array['link'];
        $response .= ' <h5> Link: ' . $link . '</h5>';
        $language = $array['language'];
        $response .= ' <h5> Language: ' . $language . '</h5>';
        $copyright = $array['copyright'];
        $response .= ' <h5> COPYRIGHTS: ' . $copyright . '</h5>';
        $response .= $this->formatArticle($array['item']);
        return $response;
    }

    private function formatArticle($article_array)
    {
        $response = '';
        try {
            foreach ($article_array as $k => $article) {
                $response .= '<h4 style="color: #F5F5F5">---------------------</h4>';
                $response .= '<h4 style="color: #B22222">' . $article["title"] . '</h4>';
                $response .= '<h5 style="color: blue">Link: ' . $article["link"] . '</h5>';
                $response .= '<p>' . $article["description"] . '</p>';
                $response .= '<h5 style="color: blue">Date: ' . $article["pubDate"] . '</h5>';
                $response .= '<h4 style="color: #F5F5F5">---------------------</h4>';
            }
            return $response;
        } catch (Exception $e) {
            return '';
        }
    }
}
