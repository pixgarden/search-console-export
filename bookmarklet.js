javascript:output2 = document.querySelectorAll('#wmt-tsq > div > div.content-region > div.overtime-chart-container > div.overtime-gviz-chart > div > div:nth-child(1) > div > div > table');d = new Date();curr_day = d.getDate();curr_month = d.getMonth() + 1;curr_year = d.getFullYear();filename = 'GWT-' + document.title.split('-')[2] + '_' + curr_year + '-' + curr_month + '-' + curr_day;pom = document.createElement('a');pom.setAttribute('href', 'data:text/csv;charset=utf-8,' + output2[0].innerHTML.replace(/<\/td\>\<td\>/g, ";").replace(/\<\/td\>\<\/tr\>\<tr\>\<td\>/g, `*`));pom.setAttribute('download', filename + '.csv');pom.click();
