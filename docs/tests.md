# Load Tests Overview and Analysis

Load tests were performed with *jmeter*.

For the dashboard load test report, see /docs/index.html

All endpoints of the REST API were tested. For more information on the REST API, see /docs/developerguide.md


The overall APDEX of the app was 0.670, which unfortunately is rather poor. It means that users may notice a moderate amount of performance lag. _Home_ _Page_ requests received the highest APDEX of 0.775, which is fair, meaning that users may notice some performance lag. The other fair APDEX, 0.750, was achieved by _Delete_ _user_ _as_ _admin_. Five endpoints; 	_Update_ _info_ _about_ _user_, _Users_ _channels_ _list_ _content_ _formated_ _to_ _html_, _Users_ _channels_ _list_, _Get_ _list_ _of_ _users_ _as_ _admin_, and _Delete_ _group_ scored APDEX of 0.5, which is Poor. Unfortunately, the remaining tested endpoints scored 0.25 or lower.

89.98% of requests were successful, which is not ideal, but overall we consider it to be a satisfactory result.

One type of error was recorded: *429/Too Many Requests*. It was detected in 10.02% of requests. It suggests that the app is prone to being overwhelmed, which needs to be taken into consideration for further development. The samplers for which the error was recorded are: _Login_, _RSS_ _channels_, _Set_ _user_ _as_ _admin_, and _User_.

The average response time was 681.99ms, with 65ms the minimum and 2538ms the maximum, which is not ideal. The highest average response time was 1843.84ms, recorded for _User_, and the lowest was 493.33ms for _Home_ _Page_.

The throughput in hits pers second was 11.83 transactions per second on average. The smallest throuphput in hits per second was 0.76 for _Update_ _info_ _about_ _user_ _requests_. The largest was 10.04 for _Home_ _Page_ requests, as can be expected.

The throughput in KB per seconds was 17.11KB received per second and 1.51KB sent per second on average. The smallest received throuphput in KB per seconds was 0.24 for _Delete_ _channel_ _requests_. The largest received throuphput in KB per seconds was 14.68 for _Home_ _Page_ requests. The smallest sent throuphput in KB per seconds was 0.11 for _Users_ _channels_ _list_ _content_ _formated_ _to_ _html_ requests. The largest sent throuphput in KB per seconds was 1.17 for _Home_ _Page_ requests.  

