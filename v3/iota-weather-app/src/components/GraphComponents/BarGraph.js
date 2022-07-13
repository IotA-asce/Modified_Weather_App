import React, { useEffect, useState } from 'react'

const BarGraph = (props) => {

    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [barColor, setBarColor] = useState('#000000');
    const [points, setPoints] = useState([]);         // heights of points
    const [labels, setLabels] = useState([]);         // labels related to points
    const [breakPoints, setBreakPoints] = useState([]);
    const [axisColor, setAxisColor] = useState('#333333');


    useEffect(() => {


        setHeight(props.height ? props.height : window.innerHeight / 3);
        setWidth(props.width ? props.width : window.innerWidth);
        setPoints(props.points ? props.points : []);
        setLabels(props.labels ? props.labels : []);
        setBarColor(props.color ? props.color : '#aaaaaa');
        setAxisColor(props.axisColor ? props.axisColor : '#999999');

        console.log(points);

    }, [points, props.axisColor, props.color, props.height, props.labels, props.points, props.width])

    useEffect(() => {
        var min = points[0];
        var max = points[points.length - 1];

        for (let index = 0; index < points.length; index++) {

            const element = points[index];

            min = element < min ? element : min;
            max = element > max ? element : max;

        }

        var start = min;
        var diff = max - min;
        var factor = diff / points.length;
        for (let index = 0; index < diff; index++) {

            setBreakPoints([...breakPoints, start + factor]);
            start += factor;

        }
    }, [breakPoints, points]);



    return (
        <div className='BarGraph' style={{ width: width, height: height, borderRadius: "1em", backgroundColor: "rgba(100,100,100,0.2)", display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }} >
            <div className='y-axisANDpoints' style={{ width: '90%', height: '90%', display: 'flex', backgroundColor: '#FFF', }}>
                <div className='y-axis' style={{ width: '0.2em', height: '100%', backgroundColor: `${axisColor}`, }} ></div>
                <div className='points' style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-end'}}>
                    {points.map((item, index) => {
                        return <div key={index} style={{ width: '1em', height: `${item}em`, backgroundColor: `${barColor}` }}></div>
                    })}
                </div>
            </div>
            <div className='x-axis' style={{ height: '0.2em', width: '90%', backgroundColor: `${axisColor}` }} ></div>
            <div className='labels' style={{ width: '90%', display: 'flex', justifyContent: 'space-evenly'}}>
                {labels.map((item, index) => {
                    return <div key={index}>{item}</div>
                })}
            </div>
        </div>
    )
}

export default BarGraph