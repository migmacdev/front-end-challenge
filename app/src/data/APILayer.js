import { timeParse } from "d3-time-format";
import { tsvParse, csvParse } from  "d3-dsv";

const parseDate = timeParse("%Y-%m-%d");
//URLS and mockup data, booksInfo, mocks the info in a responds, because the bitso API doesn't allow CORS, to some URL's
const availableBooksUrl = 'https://api.bitso.com/v3/available_books/';
const lastTradesURL = "https://api.bitso.com/v3/trades/?book=";
const orderBookURL ="https://api.bitso.com/v3/order_book/?book=";

const msftORIGINAL =[{"date":"2010-01-04","open":25.436282332605284,"high":25.835021381744056,"low":25.411360259406774,"close":25.710416,"volume":38409100,"split":"","dividend":""},{"date":"2010-01-05","open":25.627344939513726,"high":25.83502196495549,"low":25.452895407434543,"close":25.718722,"volume":49749600,"split":"","dividend":""},{"date":"2010-01-06","open":25.65226505944465,"high":25.81840750861228,"low":25.353210976925574,"close":25.560888,"volume":58182400,"split":"","dividend":""},{"date":"2010-01-07","open":25.444587793771767,"high":25.502739021094353,"low":25.079077898061875,"close":25.295062,"volume":50559700,"split":"","dividend":""},{"date":"2010-01-08","open":25.153841756996414,"high":25.6522649488092,"low":25.120612602739726,"close":25.46951,"volume":51197400,"split":"","dividend":""},{"date":"2010-01-11","open":25.511044730573705,"high":25.55258096597291,"low":25.02092861663475,"close":25.145534,"volume":68754700,"split":"","dividend":""},{"date":"2010-01-12","open":25.045848646491518,"high":25.253525666777517,"low":24.84647870701696,"close":24.979392,"volume":65912100,"split":"","dividend":""},{"date":"2010-01-13","open":25.13722727051071,"high":25.353211377924218,"low":24.929550244151567,"close":25.211991,"volume":51863500,"split":"","dividend":""},{"date":"2010-01-14","open":25.178761733851413,"high":25.83502196495549,"low":25.137227159471163,"close":25.718722,"volume":63228100,"split":"","dividend":""},{"date":"2010-01-15","open":25.818406945612217,"high":25.95132023748152,"low":25.51104412745638,"close":25.635652,"volume":79913200,"split":"","dividend":""},{"date":"2010-01-19","open":25.544274163987136,"high":25.95132113440514,"low":25.486124596784563,"close":25.835022,"volume":46575700,"split":"","dividend":""},{"date":"2010-01-20","open":25.59411494568944,"high":25.702108656795026,"low":25.17876090842236,"close":25.41136,"volume":54849500,"split":"","dividend":""},{"date":"2010-01-21","open":25.427975689088637,"high":25.51935191837554,"low":24.92124291902699,"close":24.92955,"volume":73086700,"split":"","dividend":""},{"date":"2010-01-22","open":24.921242227943445,"high":25.087384673504477,"low":23.9576208617963,"close":24.057305,"volume":102004600,"split":"","dividend":""},{"date":"2010-01-25","open":24.289904353342425,"high":24.63880174829468,"low":24.17360522169168,"close":24.356361,"volume":63373000,"split":"","dividend":""},{"date":"2010-01-26","open":24.256677400199628,"high":24.796636835593223,"low":24.165298678305085,"close":24.505889,"volume":66639900,"split":"","dividend":""},{"date":"2010-01-27","open":24.381282411526794,"high":24.771715213346813,"low":24.107148742163798,"close":24.647109,"volume":63949500,"split":"","dividend":""},{"date":"2010-01-28","open":24.788329503429356,"high":24.813251576935805,"low":23.999155984106725,"close":24.223448,"volume":117513700,"split":"","dividend":""},{"date":"2010-01-29","open":24.838171916252662,"high":24.854786078069555,"low":22.977385792760824,"close":23.409354,"volume":193888500,"split":"","dividend":""},{"date":"2010-02-01","open":23.583802007377084,"high":23.658566566701865,"low":23.193370033086943,"close":23.600417,"volume":85931100,"split":"","dividend":""},{"date":"2010-02-02","open":23.567188934614894,"high":23.675180153730853,"low":23.376124415817756,"close":23.641951,"volume":54413700,"split":"","dividend":""},{"date":"2010-02-03","open":23.47581083464236,"high":23.916086957012187,"low":23.359512531703963,"close":23.783172,"volume":61397900,"split":"","dividend":""},{"date":"2010-02-04","open":23.575494533516057,"high":23.67518033405172,"low":23.101990926835022,"close":23.126913,"volume":77850000,"split":"","dividend":""},{"date":"2010-02-05","open":23.259826837972874,"high":23.492425937060705,"low":22.90262235438972,"close":23.276441,"volume":80960100,"split":"","dividend":""},{"date":"2010-02-08","open":23.268134182833126,"high":23.326283750587436,"low":22.902622614091726,"close":23.027228,"volume":52820600,"split":"","dividend":""},{"date":"2010-02-09","open":23.234904845121957,"high":23.542267674401998,"low":23.052149892895393,"close":23.268134,"volume":59195800,"split":"","dividend":""},{"date":"2010-02-10","open":23.284748153680564,"high":23.459196018578062,"low":23.12691278885316,"close":23.251519,"volume":48591300,"split":"","dividend":""},{"date":"2010-02-11","open":23.201676634364272,"high":23.59210943129056,"low":23.01061460700204,"close":23.359512,"volume":65993700,"split":"","dividend":""},{"date":"2010-02-12","open":23.101991198292986,"high":23.309668221207414,"low":22.9109291679198,"close":23.201677,"volume":81117200,"split":"","dividend":""},{"date":"2010-02-16","open":23.47709177175651,"high":23.677395688560953,"low":23.38528740952381,"close":23.660703,"volume":51935600,"split":"","dividend":"$0.130"},{"date":"2010-02-17","open":23.810930273207585,"high":23.911080561385095,"low":23.669049515949805,"close":23.861005,"volume":45882900,"split":"","dividend":""},{"date":"2010-02-18","open":23.861005604453073,"high":24.228227231839046,"low":23.794238187581573,"close":24.17815,"volume":42856500,"split":"","dividend":""},{"date":"2010-02-19","open":24.0279246886073,"high":24.13642090510949,"low":23.944465418534303,"close":24.011232,"volume":44451800,"split":"","dividend":""},{"date":"2010-02-22","open":24.06965319596241,"high":24.15311329961183,"low":23.91108058475461,"close":23.977848,"volume":36707100,"split":"","dividend":""},{"date":"2010-02-23","open":23.93611844264031,"high":24.061307346629015,"low":23.443708753618075,"close":23.644011,"volume":52266200,"split":"","dividend":""},{"date":"2010-02-24","open":23.80258363823205,"high":24.027924500255413,"low":23.685739826453087,"close":23.894388,"volume":43165900,"split":"","dividend":""},{"date":"2010-02-25","open":23.593936399999997,"high":23.911081636363633,"low":23.385288218181813,"close":23.869352,"volume":48735300,"split":"","dividend":""},{"date":"2010-02-26","open":23.911081145797,"high":24.077999687826996,"low":23.794238166376,"close":23.927773,"volume":40370600,"split":"","dividend":""},{"date":"2010-03-01","open":24.01123281771192,"high":24.24491794728184,"low":23.810931397308096,"close":24.219881,"volume":43805400,"split":"","dividend":""},{"date":"2010-03-02","open":24.26995529971733,"high":24.45356485597533,"low":23.568897443742003,"close":23.752507,"volume":93123900,"split":"","dividend":""},{"date":"2010-03-03","open":23.794237468876933,"high":23.87769757203811,"low":23.660702639167347,"close":23.752507,"volume":48442100,"split":"","dividend":""},{"date":"2010-03-04","open":23.7525072419881,"high":23.911080688476446,"low":23.593935464685135,"close":23.894388,"volume":42890600,"split":"","dividend":""},{"date":"2010-03-05","open":23.919426488282614,"high":23.93611834207765,"low":23.719124242742218,"close":23.861005,"volume":56001800,"split":"","dividend":""},{"date":"2010-03-08","open":23.80258363823205,"high":24.144766642848992,"low":23.785891784348298,"close":23.894388,"volume":39414500,"split":"","dividend":""},{"date":"2010-03-09","open":23.835966751378393,"high":24.294994406988312,"low":23.827620824352493,"close":24.036269,"volume":50271600,"split":"","dividend":""},{"date":"2010-03-10","open":24.086346470987106,"high":24.29499464871055,"low":24.036269239148055,"close":24.17815,"volume":44891400,"split":"","dividend":""},{"date":"2010-03-11","open":24.11138228226816,"high":24.361761761597496,"low":24.077999408841674,"close":24.353415,"volume":35349700,"split":"","dividend":""},{"date":"2010-03-12","open":24.470258636146227,"high":24.520333364928977,"low":24.23657350832009,"close":24.428529,"volume":31700200,"split":"","dividend":""},{"date":"2010-03-15","open":24.35341496847337,"high":24.511988415951947,"low":24.21153420957548,"close":24.445221,"volume":37512000,"split":"","dividend":""},{"date":"2010-03-16","open":24.55371679966916,"high":24.61213828763574,"low":24.370107243509732,"close":24.511988,"volume":36723500,"split":"","dividend":""},{"date":"2010-03-17","open":24.620484783006575,"high":24.929284918267495,"low":24.5370255125557,"close":24.728981,"volume":50385700,"split":"","dividend":""},{"date":"2010-03-18","open":24.728980184354267,"high":24.804093525282557,"low":24.620483970939414,"close":24.71229,"volume":43845200,"split":"","dividend":""}]; 

const msftResponseXRPMXN = [
						{"date":"2018-05-01","dated":"1 May 2018","value":"15.38370165","volume":"597442.6317767","open":"14.94","low":"14.8","high":"15.8","close":"15.62","vwap":"15.36312328"},
						{"date":"2018-05-02","dated":"2 May 2018","value":"15.94983915","volume":"802146.3847543","open":"15.7","low":"15.53","high":"16.19","close":"16.1","vwap":"15.9394891"},
						{"date":"2018-05-03","dated":"3 May 2018","value":"16.16631802","volume":"1007420.3003996","open":"16.1","low":"15.65","high":"16.5","close":"16.07","vwap":"16.19591745"},
						{"date":"2018-05-04","dated":"4 May 2018","value":"16.36446408","volume":"818204.21722452","open":"15.99","low":"15.81","high":"16.65","close":"16.4","vwap":"16.35804251"},
						{"date":"2018-05-05","dated":"5 May 2018","value":"16.54071216","volume":"479522.0789531","open":"16.41","low":"16.27","high":"16.75","close":"16.56","vwap":"16.53274546"},
						{"date":"2018-05-06","dated":"6 May 2018","value":"15.69042641","volume":"936818.99209906","open":"16.56","low":"15","high":"16.57","close":"15.25","vwap":"15.67485625"},
						{"date":"2018-05-07","dated":"7 May 2018","value":"15.48161218","volume":"623148.37693343","open":"15.25","low":"15.1","high":"15.88","close":"15.76","vwap":"15.50284699"},
						{"date":"2018-05-08","dated":"8 May 2018","value":"15.30713861","volume":"883917.9570597","open":"15.79","low":"14.83","high":"15.79","close":"14.91","vwap":"15.30412786"},
						{"date":"2018-05-09","dated":"9 May 2018","value":"15.29028305","volume":"557131.01454251","open":"15.01","low":"14.84","high":"15.59","close":"15.34","vwap":"15.23868061"},
						{"date":"2018-05-10","dated":"10 May 2018","value":"14.83063593","volume":"749484.94146445","open":"15.37","low":"14.16","high":"15.43","close":"14.55","vwap":"14.76379522"},
						{"date":"2018-05-11","dated":"11 May 2018","value":"13.42468952","volume":"1886377.4626361","open":"14.55","low":"12.75","high":"14.59","close":"13.42","vwap":"13.38410548"},
						{"date":"2018-05-12","dated":"12 May 2018","value":"13.28738376","volume":"817801.97240183","open":"13.3","low":"12.5","high":"14.14","close":"13.37","vwap":"13.24848858"},
						{"date":"2018-05-13","dated":"13 May 2018","value":"14.08052163","volume":"867524.36742284","open":"13.26","low":"13.2","high":"14.58","close":"13.72","vwap":"14.11560749"},
						{"date":"2018-05-14","dated":"14 May 2018","value":"14.38394611","volume":"724023.67674288","open":"13.72","low":"13.63","high":"14.86","close":"14.59","vwap":"14.4148835"},
						{"date":"2018-05-15","dated":"15 May 2018","value":"13.94060461","volume":"1049027.5007457","open":"14.54","low":"13.25","high":"14.75","close":"13.6","vwap":"13.95212692"},
						{"date":"2018-05-16","dated":"16 May 2018","value":"13.71575183","volume":"509447.73406222","open":"13.6","low":"13.43","high":"14.2","close":"13.81","vwap":"13.7450047"},
						{"date":"2018-05-17","dated":"17 May 2018","value":"13.47196504","volume":"694160.59920144","open":"13.93","low":"13.02","high":"14.05","close":"13.39","vwap":"13.43102546"},
						{"date":"2018-05-18","dated":"18 May 2018","value":"13.42419407","volume":"354516.26399594","open":"13.31","low":"13.06","high":"13.7","close":"13.48","vwap":"13.40672313"},
						{"date":"2018-05-19","dated":"19 May 2018","value":"13.59130555","volume":"217125.45952072","open":"13.48","low":"13.43","high":"13.77","close":"13.5","vwap":"13.61036671"},
						{"date":"2018-05-20","dated":"20 May 2018","value":"13.88154816","volume":"276208.86651257","open":"13.5","low":"13.5","high":"14.05","close":"13.98","vwap":"13.88943204"},
						{"date":"2018-05-21","dated":"21 May 2018","value":"13.493735","volume":"418578.82964323","open":"13.81","low":"13.2","high":"14","close":"13.26","vwap":"13.4653456"},
						{"date":"2018-05-22","dated":"22 May 2018","value":"12.99292316","volume":"843607.58331288","open":"13.37","low":"12.51","high":"13.5","close":"12.71","vwap":"12.95983997"},
						{"date":"2018-05-23","dated":"23 May 2018","value":"12.1303348","volume":"1423294.5179799","open":"12.71","low":"11.55","high":"13.09","close":"12.3","vwap":"12.09269794"},
						{"date":"2018-05-24","dated":"24 May 2018","value":"12.30029526","volume":"724124.2291776","open":"12.29","low":"11.71","high":"12.78","close":"12.53","vwap":"12.27602783"},
						{"date":"2018-05-25","dated":"25 May 2018","value":"11.97210344","volume":"475039.31088569","open":"12.41","low":"11.7","high":"12.51","close":"11.96","vwap":"11.97257171"},
						{"date":"2018-05-26","dated":"26 May 2018","value":"12.08291966","volume":"314871.55635771","open":"11.96","low":"11.82","high":"12.3","close":"11.88","vwap":"12.03973148"},
						{"date":"2018-05-27","dated":"27 May 2018","value":"11.96566312","volume":"106484.81173227","open":"11.97","low":"11.81","high":"12.12","close":"11.81","vwap":"11.9489079"},
						{"date":"2018-05-28","dated":"28 May 2018","value":"11.20604032","volume":"1175577.4564762","open":"11.95","low":"10.7","high":"11.95","close":"10.98","vwap":"11.14573678"},
						{"date":"2018-05-29","dated":"29 May 2018","value":"11.8064039","volume":"1048673.0776808","open":"10.9","low":"10.79","high":"12.32","close":"12.15","vwap":"11.84681834"},
						{"date":"2018-05-30","dated":"30 May 2018","value":"11.85899208","volume":"639264.82095746","open":"12.15","low":"11.63","high":"12.25","close":"11.82","vwap":"11.87987074"}];

const msftResponseEth = [
						{"date":"2018-05-01","dated":"1 May 2018","value":"12360.59544477","volume":"291.84138654","open":"12253","low":"11850.05","high":"12780","close":"12465","vwap":"12301.80782887"},
						{"date":"2018-05-02","dated":"2 May 2018","value":"12933.83663458","volume":"705.95580075","open":"12568.17","low":"12445.72","high":"13595","close":"13595","vwap":"12947.31656242"},
						{"date":"2018-05-03","dated":"3 May 2018","value":"13984.34586974","volume":"1428.45913577","open":"13500","low":"13102.45","high":"14480","close":"14298","vwap":"13824.01718595"},
						{"date":"2018-05-04","dated":"4 May 2018","value":"14483.08180673","volume":"648.14902142","open":"14280","low":"14021","high":"14870","close":"14800.53","vwap":"14530.48630783"},
						{"date":"2018-05-05","dated":"5 May 2018","value":"14954.33578051","volume":"528.08767597","open":"14840.56","low":"14600.03","high":"15279.98","close":"15198.39","vwap":"14979.28723595"},
						{"date":"2018-05-06","dated":"6 May 2018","value":"14288.33342397","volume":"600.83271571","open":"15198.37","low":"13602.01","high":"15198.37","close":"14015.49","vwap":"14209.16931671"},
						{"date":"2018-05-07","dated":"7 May 2018","value":"13941.90288209","volume":"639.74855733","open":"13918.32","low":"13100","high":"14532.1","close":"14350","vwap":"13899.61563639"},
						{"date":"2018-05-08","dated":"8 May 2018","value":"14250.89704262","volume":"572.68016996","open":"14350","low":"13900","high":"14560","close":"14000","vwap":"14208.12632764"},
						{"date":"2018-05-09","dated":"9 May 2018","value":"14419.31657264","volume":"501.02351371","open":"13998.33","low":"13900","high":"14799.03","close":"14777.47","vwap":"14420.84922269"},
						{"date":"2018-05-10","dated":"10 May 2018","value":"14362.06821445","volume":"431.93097647","open":"14777.47","low":"13980.01","high":"14800","close":"14259.97","vwap":"14364.38688093"},
						{"date":"2018-05-11","dated":"11 May 2018","value":"13559.73311808","volume":"854.41931703","open":"14260","low":"12905.01","high":"14348.94","close":"13366.68","vwap":"13413.71114851"},
						{"date":"2018-05-12","dated":"12 May 2018","value":"13184.85263157","volume":"270.43226533","open":"13496","low":"12510","high":"13599.74","close":"13300","vwap":"13163.15197845"},
						{"date":"2018-05-13","dated":"13 May 2018","value":"14037.22913613","volume":"400.36854927","open":"13330.05","low":"13163.01","high":"14433.33","close":"13800","vwap":"13957.67245824"},
						{"date":"2018-05-14","dated":"14 May 2018","value":"14163.37502465","volume":"317.64316773","open":"13800","low":"13345.01","high":"14499","close":"14349","vwap":"14182.96967608"},
						{"date":"2018-05-15","dated":"15 May 2018","value":"14027.82196489","volume":"348.93830652","open":"14121.73","low":"13500","high":"14465","close":"13795.92","vwap":"14017.73655196"},
						{"date":"2018-05-16","dated":"16 May 2018","value":"13843.36246991","volume":"422.87916556","open":"13792","low":"13570","high":"14280","close":"14060.86","vwap":"13862.37983747"},
						{"date":"2018-05-17","dated":"17 May 2018","value":"13631.81769191","volume":"328.79291523","open":"14060.86","low":"13100","high":"14246.92","close":"13619.96","vwap":"13589.60725035"},
						{"date":"2018-05-18","dated":"18 May 2018","value":"13668.25707822","volume":"295.05969478","open":"13610","low":"13310.03","high":"13980","close":"13900.01","vwap":"13634.53262524"},
						{"date":"2018-05-19","dated":"19 May 2018","value":"14013.62768251","volume":"350.02852948","open":"13900","low":"13658.43","high":"14300","close":"14068.97","vwap":"13931.2711864"},
						{"date":"2018-05-20","dated":"20 May 2018","value":"14141.67754025","volume":"245.20819157","open":"14069","low":"13925","high":"14300","close":"13950.22","vwap":"14158.25321188"},
						{"date":"2018-05-21","dated":"21 May 2018","value":"13778.54858783","volume":"306.79869249","open":"14193","low":"13500","high":"14198","close":"13750","vwap":"13716.76025154"},
						{"date":"2018-05-22","dated":"22 May 2018","value":"13080.57897279","volume":"520.40987758","open":"13760","low":"12450.01","high":"13788","close":"12680","vwap":"13058.08640614"},
						{"date":"2018-05-23","dated":"23 May 2018","value":"12158.71961115","volume":"909.07193344","open":"12640","low":"11170.07","high":"12955.99","close":"12149.95","vwap":"11916.17940118"},
						{"date":"2018-05-24","dated":"24 May 2018","value":"11688.33923611","volume":"443.77405834","open":"12200","low":"11270","high":"12395.95","close":"12000","vwap":"11749.35496104"},
						{"date":"2018-05-25","dated":"25 May 2018","value":"11664.9203405","volume":"269.83537513","open":"11967.68","low":"11300","high":"12090","close":"11616.26","vwap":"11592.61669266"},
						{"date":"2018-05-26","dated":"26 May 2018","value":"11651.70130308","volume":"126.76926892","open":"11614.99","low":"11326.01","high":"11900","close":"11590","vwap":"11653.56617885"},
						{"date":"2018-05-27","dated":"27 May 2018","value":"11323.95864798","volume":"141.79761142","open":"11491.49","low":"11001.01","high":"11692.99","close":"11050","vwap":"11215.00109154"},
						{"date":"2018-05-28","dated":"28 May 2018","value":"10428.92454545","volume":"671.85351072","open":"11050","low":"10000","high":"11168.02","close":"10297.71","vwap":"10343.29127045"},
						{"date":"2018-05-29","dated":"29 May 2018","value":"11136.7109925","volume":"569.620533","open":"10122.24","low":"10101.01","high":"11550","close":"11239","vwap":"11078.14709692"},
						{"date":"2018-05-30","dated":"30 May 2018","value":"10968.05182938","volume":"276.75496915","open":"11239","low":"10610","high":"11544.22","close":"11215","vwap":"10952.74988816"}];
const msftResponseBtc = [
						{"date":"2018-05-01","dated":"1 May 2018","value":"169045.61478566","volume":"125.92775235","open":"166680","low":"165350.45","high":"172249.99","close":"170304.24","vwap":"169444.82308652"},
						{"date":"2018-05-02","dated":"2 May 2018","value":"173006.6495745","volume":"196.51769716","open":"170302.43","low":"169257.31","high":"175000","close":"173900","vwap":"173003.79633182"},
						{"date":"2018-05-03","dated":"3 May 2018","value":"177645.72269185","volume":"217.60522088","open":"173218.84","low":"170597.39","high":"181389","close":"177920.55","vwap":"177465.88103931"},
						{"date":"2018-05-04","dated":"4 May 2018","value":"177680.80032552","volume":"159.22456734","open":"177909.76","low":"175000.01","high":"180554","close":"179774.31","vwap":"177948.49863805"},
						{"date":"2018-05-05","dated":"5 May 2018","value":"179834.01621402","volume":"87.88971826","open":"179600.77","low":"177500","high":"181899.99","close":"181486.23","vwap":"179877.50650493"},
						{"date":"2018-05-06","dated":"6 May 2018","value":"174678.42703655","volume":"87.99754184","open":"181400","low":"170000","high":"181478.31","close":"172463.61","vwap":"174586.39662558"},
						{"date":"2018-05-07","dated":"7 May 2018","value":"174761.92377089","volume":"143.5386044","open":"172463.26","low":"170400","high":"177000","close":"176877.4","vwap":"174541.89412282"},
						{"date":"2018-05-08","dated":"8 May 2018","value":"175552.67330076","volume":"120.83268376","open":"176200","low":"170647.03","high":"177824","close":"174100.91","vwap":"175159.63026445"},
						{"date":"2018-05-09","dated":"9 May 2018","value":"178957.63674389","volume":"134.26389291","open":"174104.39","low":"173733","high":"181000","close":"180497.4","vwap":"179207.43648451"},
						{"date":"2018-05-10","dated":"10 May 2018","value":"176687.22017451","volume":"86.48815964","open":"180399.57","low":"173003","high":"180995","close":"173293","vwap":"176829.87404433"},
						{"date":"2018-05-11","dated":"11 May 2018","value":"168266.89294212","volume":"173.21641819","open":"174877.07","low":"163450.01","high":"175000","close":"167333.4","vwap":"167998.7450092"},
						{"date":"2018-05-12","dated":"12 May 2018","value":"166099.39989936","volume":"126.84766627","open":"167254.39","low":"162500","high":"171000","close":"164502.21","vwap":"166489.15113978"},
						{"date":"2018-05-13","dated":"13 May 2018","value":"167298.24230381","volume":"64.63893069","open":"164491.92","low":"162215.99","high":"170253.3","close":"164000","vwap":"167066.0026447"},
						{"date":"2018-05-14","dated":"14 May 2018","value":"170982.00985479","volume":"125.35742634","open":"166996.98","low":"162222.18","high":"175500","close":"171000.09","vwap":"170607.62818412"},
						{"date":"2018-05-15","dated":"15 May 2018","value":"168212.55019567","volume":"131.99027839","open":"172978.39","low":"162074.86","high":"175000","close":"164496.99","vwap":"168123.60091261"},
						{"date":"2018-05-16","dated":"16 May 2018","value":"165350.28956826","volume":"108.94241365","open":"164500","low":"162113.01","high":"168502.6","close":"166490","vwap":"165188.52199825"},
						{"date":"2018-05-17","dated":"17 May 2018","value":"163243.82500763","volume":"119.50245002","open":"166480.8","low":"159000","high":"167589.99","close":"161400","vwap":"162802.33273883"},
						{"date":"2018-05-18","dated":"18 May 2018","value":"164205.38817431","volume":"126.73579831","open":"161421.06","low":"160000","high":"166992.53","close":"166958.49","vwap":"163743.57218717"},
						{"date":"2018-05-19","dated":"19 May 2018","value":"166502.45424008","volume":"56.79955748","open":"165550.47","low":"164612.01","high":"168349.99","close":"164906.47","vwap":"166477.29008768"},
						{"date":"2018-05-20","dated":"20 May 2018","value":"168596.63312561","volume":"41.75103516","open":"165000.19","low":"164900.43","high":"171297.47","close":"169000","vwap":"168583.52896977"},
						{"date":"2018-05-21","dated":"21 May 2018","value":"165906.72734112","volume":"88.76186534","open":"168447.02","low":"163500","high":"170777","close":"164010","vwap":"165846.82788499"},
						{"date":"2018-05-22","dated":"22 May 2018","value":"161113.29399399","volume":"123.53495538","open":"164010","low":"157000","high":"165414.07","close":"158505.01","vwap":"161231.87231079"},
						{"date":"2018-05-23","dated":"23 May 2018","value":"154135.89801396","volume":"200.29632738","open":"158999.99","low":"148509","high":"160300","close":"154800","vwap":"152606.46826698"},
						{"date":"2018-05-24","dated":"24 May 2018","value":"150156.66491315","volume":"173.0230889","open":"153636.29","low":"146500","high":"154900","close":"149458.5","vwap":"150073.84234384"},
						{"date":"2018-05-25","dated":"25 May 2018","value":"146855.23714243","volume":"94.48230135","open":"149457.25","low":"145000","high":"150486.99","close":"145500","vwap":"146875.2138064"},
						{"date":"2018-05-26","dated":"26 May 2018","value":"147393.84314309","volume":"59.03744144","open":"146739.07","low":"142999.99","high":"149866.19","close":"145793.83","vwap":"147258.84789406"},
						{"date":"2018-05-27","dated":"27 May 2018","value":"145298.12838907","volume":"24.55959313","open":"144302.54","low":"144000","high":"146129","close":"144900","vwap":"145198.65121814"},
						{"date":"2018-05-28","dated":"28 May 2018","value":"141737.50353028","volume":"150.92128226","open":"145791.06","low":"139000","high":"145966","close":"140695.51","vwap":"141380.63796871"},
						{"date":"2018-05-29","dated":"29 May 2018","value":"146923.31792763","volume":"148.52642464","open":"140698.11","low":"139050","high":"149787.99","close":"148091.95","vwap":"146354.91920493"},
						{"date":"2018-05-30","dated":"30 May 2018","value":"145708.15300861","volume":"102.57278215","open":"147328.93","low":"143468.77","high":"149599.88","close":"145238.04","vwap":"145591.86884715"}];
const booksInfo = {
	"btc_mxn" : {"high":"149500.00","last":"148000.04","created_at":"2018-05-26T15:19:22+00:00","book":"btc_mxn","volume":"78.03237765","vwap":"145818.25005458","low":"145003.01","ask":"148497.19","bid":"148000.00"},
	"eth_mxn" : {"high":"11800.00","last":"11759.91","created_at":"2018-05-26T15:20:14+00:00","book":"eth_mxn","volume":"265.84921184","vwap":"11453.69951708","low":"11326.01","ask":"11759.91","bid":"11560.34"},
	"xrp_btc": {"high":"0.00008240","last":"0.00008185","created_at":"2018-05-26T15:21:06+00:00","book":"xrp_btc","volume":"12057.78073995","vwap":"0.00008086","low":"0.00008126","ask":"0.00008240","bid":"0.00008198"},
	"xrp_mxn": {"high":"12.23","last":"12.14","created_at":"2018-05-26T15:41:47+00:00","book":"xrp_mxn","volume":"391345.26764208","vwap":"11.86975402","low":"11.82","ask":"12.14","bid":"12.10"},
	"eth_btc": {"high":"0.08099898","last":"0.07924900","created_at":"2018-05-26T15:40:55+00:00","book":"eth_btc","volume":"21.92073108","vwap":"0.07852102","low":"0.07850000","ask":"0.08025600","bid":"0.07886509"},
	"bch_btc": {"high":"0.13599998","last":"0.13599922","created_at":"2018-05-26T15:42:54+00:00","book":"bch_btc","volume":"31.67259170","vwap":"0.13332992","low":"0.13215000","ask":"0.13599873","bid":"0.13509956"},
	"ltc_btc": {"high":"0.01619960","last":"0.01619960","created_at":"2018-05-26T15:43:35+00:00","book":"ltc_btc","volume":"35.41290873","vwap":"0.01596680","low":"0.01596300","ask":"0.01619960","bid":"0.01600000"},
	"ltc_mxn": {"high":"2415.00","last":"2375.00","created_at":"2018-05-26T15:44:14+00:00","book":"ltc_mxn","volume":"417.84998760","vwap":"2346.83732373","low":"2325.94","ask":"2414.97","bid":"2375.00"},
	"bch_mxn": {"high":"20000.00","last":"19800.00","created_at":"2018-05-26T15:44:41+00:00","book":"bch_mxn","volume":"180.18019162","vwap":"19097.38378095","low":"19000.00","ask":"19999.99","bid":"19900.00"}
};

const booksAndValue = [
	{"book":"btc_mxn", "change": "up", "value" : "149500.00"},
	{"book":"eth_mxn", "change": "down", "value" : "11800.00"},
	{"book":"xrp_btc", "change": "down", "value" : "0.00008240"},
	{"book":"xrp_mxn", "change": "up", "value" : "12.23"},
	{"book":"eth_btc", "change": "down", "value" : "0.08099898"},
	{"book":"bch_btc", "change": "up", "value" : "0.13599998"},
	{"book":"ltc_btc", "change": "down", "value" : "0.01619960"},
	{"book":"ltc_mxn", "change": "up", "value" : "2415.00"},
	{"book":"bch_mxn", "change": "down", "value" : "20000.00"},
];

/**
* Make an object with the received data assigning new key names
*/
function formatData(data){
	var books = [];
	console.log(data);
	data.forEach((book) => {
		books.push({
			name: book.book, 
			volume: booksInfo[book.book]["volume"],
			high: booksInfo[book.book]["high"],
			low: booksInfo[book.book]["low"],
			vmap: booksInfo[book.book]["vwap"]
		});
	});
	return books;
}


	function parseData(parse) {
		return function(d) {
			console.log("!!!!!!!!!!!!!!!!!!!");
			d.date = parse(d.date);
			d.open = +d.open;
			d.high = +d.high;
			d.low = +d.low;
			d.close = +d.close;
			d.volume = +d.volume;

			return d;
		};
	};

	function parseJsontoChart(data){

		var keys = ["date","open","close","hight","low","volume"],
          i = 0, k = 0,
          obj = null,
          output = [];
      for (i = 0; i < data.length; i++) {
          obj = {};
          obj[keys[0]] = parseDate(data[i][0]); 
          for (k = 1; k < keys.length; k++) {
          	console.log(data);
          	console.log(data[i][k]);
              obj[keys[k]] = data[i][k];
          }
      output.push(obj);
      }
    return output;
  }

/*
* This class handles the communication between the API and the components requests
* by setting callbacks, the data can be managed before sent to populate the components
* This allows the app to change the data source without messing around with the components
*/
class APILayer {

	/**
	* This function is a mockup , since the URL to get this data in the bitso API, doesn't allow CORS
	*/
	static getBookData(book, callback){
		callback(booksInfo[book]);
	}

	/**
	* Gets list of available books from the bitso API, and responds with the list of names
	*/
	static getBooksList(callback){
		fetch(availableBooksUrl)
			.then((resp) => resp.json()) // Transform the data into json
		  	.then(function(data) {
			    callback(data.payload.map(b => b.book));
		    })
		    .catch(function(error) {
        		console.log("error: " + error);
    		}
		);
	}

	/**
	* Returs last trades from the api using the bookname and sending back the data through the callback
	*/
	static getLastTrades(bookName,callback){
		fetch(lastTradesURL + bookName)
			.then((resp) => resp.json()) // Transform the data into json
		  	.then(function(data) {
			    callback(data.payload);
		    })
		    .catch(function(error) {
        		console.log("error: " + error);
    		}
		);
	}

	/**
	* Returs last orders from the specified bookname and sends back the data through the callback
	*/
	static getOrders(bookName,callback){
		fetch(orderBookURL + bookName)
			.then((resp) => resp.json()) // Transform the data into json
		  	.then(function(data) {
			    callback(data.payload);
		    })
		    .catch(function(error) {
        		console.log("error: " + error);
    		}
		);
	}

	static getBooksListAndValue(callback){
		fetch(availableBooksUrl)
			.then((resp) => resp.json()) // Transform the data into json
		  	.then(function(data) {
			    callback(booksAndValue);
		    })
		    .catch(function(error) {
        		console.log("error: " + error);
    		}
		);
	}



	static getCandleStickData(book, time, callback){

		var data = [];
		/*msftResponseBtc.forEach((b, index) => {

			var book = {};

			book.date = parseDate(b.date);
			book.open = b.open;
			book.high = b.high;
			book.low = b.low;
			book.close = b.close;
			book.volume = b.volume;
			book.split = "";
			book.dividend = "";
			book.absoluteChange = undefined;
			book.percentChange = undefined;
			
			//data.push(book);

			data.push(`${index}`: { 
				"date": book.date, 
				"open" : book.open,
				"high": book.high,
				"low": book.low,
				"close": book.close,
				"volume": book.volume,
				"split": "",
				"dividend": "",
				"absoluteChange": undefined,
				"percentChange": undefined
			});
		});

		console.log("::_:_:_:_:_:_:_:");
		console.log(data);*/


		fetch("//rrag.github.io/react-stockcharts/data/MSFT.tsv")
		.then(response => response.text())
		.then(data => tsvParse(data, parseData(parseDate)))
		.then(function(data) {
		    callback(data);
		});


		/*msftORIGINAL.forEach((b) => {
			console.log("--------------------------------------");
			var book = {};
			book.date = parseDate(b.date);
			book.open = b.open;
			book.high = b.high;
			book.low = b.low;
			book.close = b.close;
			book.volume = b.volume;
			book.split = "";
			book.dividend = "";
			book.absoluteChange = undefined;
			book.percentChange = undefined;

			console.log(book);

			result.push(book);	
		});	*/

		callback(data);
		/* CORS is not enabled in the https://bitso.com/trade/chartJSON/btc_mxn/1month URL that's why data is being faked
		fetch(tradeURL + book + "/" + time + "/")
			.then((resp) => resp.json()) // Transform the data into json
		  	.then(function(data) {
		  		console.log(data);
			    callback(booksAndValue);
		    })
		    .catch(function(error) {
        		console.log("error: " + error);
    		}
		);*/
	}
}

export default APILayer;