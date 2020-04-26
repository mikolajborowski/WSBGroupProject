/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 6;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 89.9830220713073, "KoPercent": 10.0169779286927};
    var dataset = [
        {
            "label" : "KO",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "OK",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.6702037351443124, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.25, 500, 1500, "Edit user"], "isController": false}, {"data": [0.25, 500, 1500, "Delete channel "], "isController": false}, {"data": [0.01, 500, 1500, "User"], "isController": false}, {"data": [0.25, 500, 1500, "Rename group "], "isController": false}, {"data": [0.5, 500, 1500, "Update info about user"], "isController": false}, {"data": [0.016666666666666666, 500, 1500, "RSS channels "], "isController": false}, {"data": [0.05, 500, 1500, "Set user as admin "], "isController": false}, {"data": [0.5, 500, 1500, "Users channels list content formated to html "], "isController": false}, {"data": [0.03, 500, 1500, "Login"], "isController": false}, {"data": [0.5, 500, 1500, "Users channels list"], "isController": false}, {"data": [0.25, 500, 1500, "Delete channel from group "], "isController": false}, {"data": [0.75, 500, 1500, "Delete user as admin"], "isController": false}, {"data": [0.25, 500, 1500, "Get all groups  "], "isController": false}, {"data": [0.25, 500, 1500, "Add channel to group "], "isController": false}, {"data": [0.5, 500, 1500, "Get list of users as admin "], "isController": false}, {"data": [0.5, 500, 1500, "Delete group  "], "isController": false}, {"data": [0.7755, 500, 1500, "Home Page"], "isController": false}, {"data": [0.25, 500, 1500, "Add group "], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 1178, 118, 10.0169779286927, 681.9906621392196, 65, 2538, 1928.3000000000004, 2081.05, 2333.0, 11.831585713711783, 17.11488456859407, 1.5120809542103573], "isController": false}, "titles": ["Label", "#Samples", "KO", "Error %", "Average", "Min", "Max", "90th pct", "95th pct", "99th pct", "Transactions\/s", "Received", "Sent"], "items": [{"data": ["Edit user", 2, 0, 0.0, 1700.5, 1347, 2054, 2054.0, 2054.0, 2054.0, 0.8064516129032258, 0.24965347782258066, 0.16617313508064516], "isController": false}, {"data": ["Delete channel ", 2, 0, 0.0, 1771.5, 1417, 2126, 2126.0, 2126.0, 2126.0, 0.7836990595611285, 0.24260996277429467, 0.17143416927899685], "isController": false}, {"data": ["User", 50, 41, 82.0, 1843.8400000000001, 1133, 2538, 2150.8, 2424.8999999999996, 2538.0, 2.4188476609743117, 3.8400623911518554, 0.29999380170286877], "isController": false}, {"data": ["Rename group ", 2, 0, 0.0, 1487.0, 1276, 1698, 1698.0, 1698.0, 1698.0, 0.9429514380009429, 0.29190977133427626, 0.20166637199434229], "isController": false}, {"data": ["Update info about user", 2, 0, 0.0, 1277.0, 356, 2198, 2198.0, 2198.0, 2198.0, 0.7621951219512195, 0.23595298208841461, 0.15705387766768292], "isController": false}, {"data": ["RSS channels ", 30, 23, 76.66666666666667, 1833.933333333333, 990, 2500, 2297.9000000000005, 2398.7999999999997, 2500.0, 1.4897949049014252, 2.241239307617818, 0.32007312409991556], "isController": false}, {"data": ["Set user as admin ", 20, 15, 75.0, 1785.1499999999999, 1062, 2342, 2300.5000000000005, 2340.75, 2342.0, 1.0789232346118574, 1.5951521787506069, 0.22969264174353995], "isController": false}, {"data": ["Users channels list content formated to html ", 2, 0, 0.0, 1096.5, 212, 1981, 1981.0, 1981.0, 1981.0, 0.8309098462816784, 0.25722502077274617, 0.11197808475280432], "isController": false}, {"data": ["Login", 50, 39, 78.0, 1814.1199999999997, 493, 2451, 2252.8999999999996, 2402.4, 2451.0, 2.474757473767571, 3.9281941385369232, 0.5993553256780836], "isController": false}, {"data": ["Users channels list", 2, 0, 0.0, 1203.0, 920, 1486, 1486.0, 1486.0, 1486.0, 1.0482180293501049, 0.3244971829140461, 0.1392164570230608], "isController": false}, {"data": ["Delete channel from group ", 2, 0, 0.0, 1060.5, 564, 1557, 1557.0, 1557.0, 1557.0, 1.010611419909045, 0.31285529307731175, 0.22403202374936837], "isController": false}, {"data": ["Delete user as admin", 2, 0, 0.0, 698.5, 123, 1274, 1274.0, 1274.0, 1274.0, 1.1799410029498525, 0.36527470501474923, 0.2535029498525074], "isController": false}, {"data": ["Get all groups  ", 2, 0, 0.0, 1238.5, 636, 1841, 1841.0, 1841.0, 1841.0, 0.8830022075055187, 0.2733512693156733, 0.11382450331125828], "isController": false}, {"data": ["Add channel to group ", 2, 0, 0.0, 1271.5, 775, 1768, 1768.0, 1768.0, 1768.0, 0.9124087591240876, 0.282454664689781, 0.19958941605839414], "isController": false}, {"data": ["Get list of users as admin ", 2, 0, 0.0, 1095.5, 846, 1345, 1345.0, 1345.0, 1345.0, 1.1325028312570782, 0.35058925537938845, 0.14709265288788223], "isController": false}, {"data": ["Delete group  ", 2, 0, 0.0, 1097.0, 284, 1910, 1910.0, 1910.0, 1910.0, 0.8565310492505352, 0.2651565845824411, 0.183183886509636], "isController": false}, {"data": ["Home Page", 1000, 0, 0.0, 493.32700000000057, 65, 2347, 1595.8999999999992, 1938.9499999999998, 2149.99, 10.043790928448034, 14.683159199108113, 1.1671983598489415], "isController": false}, {"data": ["Add group ", 4, 0, 0.0, 1611.25, 1205, 2298, 2298.0, 2298.0, 2298.0, 1.3463480309660047, 0.41678938067990573, 0.2839952877818916], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Percentile 1
            case 8:
            // Percentile 2
            case 9:
            // Percentile 3
            case 10:
            // Throughput
            case 11:
            // Kbytes/s
            case 12:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["429\/Too Many Requests", 118, 100.0, 10.0169779286927], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 1178, 118, "429\/Too Many Requests", 118, null, null, null, null, null, null, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["User", 50, 41, "429\/Too Many Requests", 41, null, null, null, null, null, null, null, null], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["RSS channels ", 30, 23, "429\/Too Many Requests", 23, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["Set user as admin ", 20, 15, "429\/Too Many Requests", 15, null, null, null, null, null, null, null, null], "isController": false}, {"data": [], "isController": false}, {"data": ["Login", 50, 39, "429\/Too Many Requests", 39, null, null, null, null, null, null, null, null], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
