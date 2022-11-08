import '../Styles/Grid.css';
import {useState, useEffect} from 'react';

function Grid(props) {
    const [gridArr, setGridArr] = useState([]);

    useEffect(() => {
        let arr = [];
        for(let x = 1; x <= props.width; x++)
        {
            arr.push([]);
            for (let y = 1; y <= props.height; y++)
            {
                arr[x-1].push({ x: x, y: y});
            }
        }
        setGridArr(arr);
    }, [props]);

  return (
    <div className="grid">
        {gridArr.map((x, i) => 
            <div key={"row-"+(i+1)} id={"row-"+(i+1)} className="row">
                {x.map((y) => <div key={"x-"+y.x+"-y-"+y.y} x={y.x} y={y.y}></div>)}                 
            </div>
        )}
     
    </div>
  );
}

export default Grid;
