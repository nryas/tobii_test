function doga() {
  var cs = document.getElementById('myCanvas')
  var ctx = cs.getContext('2d')
  var w = cs.width
  var h = cs.height

  function draw() {
    $.getJSON('./data.json', function(data){
      ctx.clearRect(0, 0, 10, 10)
      ctx.beginPath()
      // ctx.arc(70, 70, 40, 0, Math.PI*2, false)

      var left_x = data['left_eye_x']['value']
      var left_y = data['left_eye_y']['value']
      ctx.arc(left_x, left_y, 40, 0, Math.PI*2, false)
      ctx.stroke()
    })
  }

  setInterval(draw, 1000)
}
