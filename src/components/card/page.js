import React from 'react';

export default function Card(props) {
  const cardStyle = {
    backgroundColor: props.color,
  };

  return (
    <div className="w-80 flex flex-col gap-4 text-xl">
        <a href={props.link}>
            <div className="text-slate-200 flex flex-col rounded-md" style={cardStyle}>
                <div className='h-52 flex justify-center items-center'>
                    <img src={`../${props.image}`} className="w-1/2 opacity-50" />
                </div>
                <button className="rounded-b-md w-full bg-slate-200 text-slate-800 h-12 text-xl font-semibold">{props.text}</button>
            </div>
        </a>
    </div>
  );
}
