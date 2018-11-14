var graph = {
  "status": 0,
  "msg": "success",
  "data": {
    "vertexes": [{
      "_id": "Customer/4a4e0b284f8cdad2ed77595d3b7270b9",
      "_type": "客户",
      "name": "陈旭辉",
      "label": "陈旭辉",
      "color": "#388e3c"
    }, {
      "_id": "BlackUser/038969f8f8f3c8d1292f3a68f93558aa",
      "_type": "客户",
      "name": "王芳",
      "label": "王芳",
      "color": "#388e3c"
    }, {
      "_id": "Customer/d0f787681a4d3db9de05923a9af8f66d",
      "_type": "客户",
      "name": "王海君",
      "label": "王海君",
      "color": "#388e3c"
    }, {
      "_id": "Customer/99c5f4130b4b1b12cfbd03839a605114",
      "_type": "客户",
      "name": "王海龙",
      "label": "王海龙",
      "color": "#388e3c"
    }, {
      "_id": "Customer/391410a6bcd938f7604a4fd3a455a262",
      "_type": "客户",
      "name": "王海霞",
      "label": "王海霞",
      "color": "#388e3c"
    }],
    "edges": [{
      "_from": "Customer/d0f787681a4d3db9de05923a9af8f66d",
      "_to": "Customer/99c5f4130b4b1b12cfbd03839a605114",
      "_id": "Transfer_summary/323c5cea90715ebf65e097b9c330a43a",
      "_type": "转账汇总",
      "label": "转账：2.0次 2000.0元",
      "color": "#0097a7"
    }, {
      "_from": "Customer/d0f787681a4d3db9de05923a9af8f66d",
      "_to": "Customer/d0f787681a4d3db9de05923a9af8f66d",
      "_id": "Transfer_summary/76c696fa2053c5dfe1e881e3476cf138",
      "_type": "转账汇总",
      "label": "转账：4.0次 21763.809999999998元",
      "color": "#0097a7"
    }, {
      "_from": "Customer/391410a6bcd938f7604a4fd3a455a262",
      "_to": "Customer/d0f787681a4d3db9de05923a9af8f66d",
      "_id": "Transfer_summary/68601e08947974586a0c5d8fe66af97e",
      "_type": "转账汇总",
      "label": "转账：2.0次 60000.0元",
      "color": "#0097a7"
    }, {
      "_from": "BlackUser/038969f8f8f3c8d1292f3a68f93558aa",
      "_to": "Customer/d0f787681a4d3db9de05923a9af8f66d",
      "_id": "Transfer_summary/200cfb67c1ab2599f799c502442aaa8b",
      "_type": "转账汇总",
      "label": "转账：2.0次 20000.0元",
      "color": "#0097a7"
    }, {
      "_from": "Customer/4a4e0b284f8cdad2ed77595d3b7270b9",
      "_to": "Customer/d0f787681a4d3db9de05923a9af8f66d",
      "_id": "Transfer_summary/cbb3cb9e68f08d2d74876b218aef297c",
      "_type": "转账汇总",
      "label": "转账：2.0次 79800.0元",
      "color": "#0097a7"
    }]
  }
}

module.exports = {
  graph
}