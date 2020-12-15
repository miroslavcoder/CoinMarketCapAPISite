$(document).ready(function() {
   var refreshTable = $("#coinmarketcap").DataTable( {
      "bRetrieve": true,
      "processing": true,
      "language": {
         "emptyTable": "The table is still loading data or there was an error with JSON"
      },
      "ajax": {
         "url": "json/all.json",
         "dataSrc": "markets",
         "dataType": "json"
      },
      "columns": [
         { "data": "position", 
            "render": function ( data, type, row ) { 
              return '<img src="img/HashMark.png" height="14" width="14"></img> ' + (data) +' '; 
            } 
         },
         { "data": null,
            "render": function ( data, type, row ) { 
              return '<img src="http://coinmarketcap.com/static/img/coins/16x16/'+ (data.icon) +'" height="18" width="18"></img> ' + (data.name) +' '; 
            } 
         },
         { "data": "symbol" },
         { "data": "market_cap.usd",
            "render": function ( data, type, row ) { 
              return '<span style="font-size:12px;" class="glyphicon glyphicon-usd"></span> ' + Number(data).toLocaleString() +' ';
            } 
         },
         { "data": "price.usd",
            "render": function ( data, type, row ) {
              if ( data > 1 ) { return '<span style="font-size:12px;" class="glyphicon glyphicon-usd"></span> ' + Number(data) +' ';
              } else {
               return '<span style="font-size:12px;" class="glyphicon glyphicon-usd"></span> ' + Number(data).toFixed(8) +' ';
               }
            }
         },
         { "data": "price.btc",
            "render": function(data, type, row) {
              return '<span style="font-size:12px;color:orange;" class="glyphicon glyphicon-bitcoin"></span> ' + Number(data).toFixed(8) + ' ';
            }
         }, 
         { "data": null,
            "render": function ( data, type, row ) {
              if ( data.supply > 1 ) { return '<img src="http://coinmarketcap.com/static/img/coins/16x16/'+ (data.icon) +'" height="18" width="18"></img> ' + Number(data.supply).toLocaleString() +' ';
              } else {
               return '<img src="http://coinmarketcap.com/static/img/coins/16x16/'+ (data.logo) +'" height="18" width="18"></img> ' + Number(data.supply).toFixed(8) +' ';
               }
            }
         },
         { "data": "volume.usd",
            "render": function ( data, type, row ) {
              return '<span style="font-size:12px;" class="glyphicon glyphicon-usd"></span> ' + Number(data).toLocaleString() +' ';
            }
         },
         { "data": "change1h",
            "render": function( data, type, row ) {
              if ( data > 0 ) { return '<img src="img/up.png" height="14" width="14"></img> ' + (data) + '% ';
              } else {
               return '<img src="img/down.png" height="14" width="14"></img> ' + (data) + '% ';
               }
            }
         },
         { "data": "change24h",
            "render": function( data, type, row ) {
              if ( data > 0 ) { return '<img src="img/up.png" height="14" width="14"></img> ' + (data) + '% ';
              } else {
               return '<img src="img/down.png" height="14" width="14"></img> ' + (data) + '% ';
               }
            }
         },
         { "data": "change7d",
            "render": function( data, type, row ) {
              if ( data > 0 ) { return '<img src="img/up.png" height="14" width="14"></img> ' + (data) + '% ';
              } else {
               return '<img src="img/down.png" height="14" width="14"></img> ' + (data) + '% ';
               }
            }
         }
      ],
      "dom": 'T<"clear">lfrtip',
      "tableTools": {
         "sSwfPath": "swf/copy_csv_xls_pdf.swf",
         "aButtons": [
            "copy",
            "print",
            {
            "sExtends": "collection",
            "sButtonText": "Save",
            "aButtons": [ "csv", "xls", "pdf" ]
            }
         ]
      }
   });
   function round(value, decimals) {
      return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
   }
   setInterval (function test() {
      refreshTable.ajax.reload( null, false );
   }, 300000);
});
