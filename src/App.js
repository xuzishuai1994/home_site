import React, { Component } from 'react';
import curvejs from 'curvejs';

import s from './app.less';

class App extends Component {
	componentDidMount() {
		var Stage = curvejs.Stage,
		    Curve = curvejs.Curve,
		    canvas = document.getElementById('myCanvas'),
		    stage = new Stage(canvas),
		    rd = function() {
		        return -2 + Math.random() * 2
		    }

		var curve = new Curve({
		    color: '#00FF00',
		    points: [277, 327, 230, 314, 236, 326, 257, 326],
		    data: [rd(), rd(), rd(), rd(), rd(), rd(), rd(), rd()],
		    motion: function motion(points, data) {
		      points.forEach(function (item, index) {
		          points[index] += data[index]
		      })
		    }
		})

		stage.add(curve)

		function tick(){
		    stage.update()
		    requestAnimationFrame(tick)
		}

		tick()
	}
  render() {
    return (
      <div className={s.App}>
       <canvas className={s.myCanvas} id="myCanvas"></canvas>
      </div>
    );
  }
}

export default App;
