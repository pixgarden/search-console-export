var output2 = document.querySelectorAll('#wmt-tsq > div > div.content-region > div.overtime-chart-container > div.overtime-gviz-chart > div > div:nth-child(1) > div > div > table');
var d = new Date();
var curr_day = d.getDate();
var curr_month = d.getMonth() + 1; //Months are zero based
var curr_year = d.getFullYear();
var filename = 'GWT-' + document.URL.slice(-14, -11) + '_' + curr_year + '-' + curr_month + '-' + curr_day;
var pom = document.createElement('a');
pom.setAttribute('href', 'data:text/csv;charset=utf-8,' + output2[0].innerHTML.replace(/<\/td\>\<td\>/g, ";").replace(/\<\/td\>\<\/tr\>\<tr\>\<td\>/g, `*`));
pom.setAttribute('download', filename + '.csv');
pom.click();
