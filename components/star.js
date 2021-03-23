export default function Star(props) {
  return (
      <div>
        {[0, 1, 2, 3, 4].map((index) => {
          if (index < props.num) {
            return (<i className="uis uis-star text-2xl text-yellow-400" key={index}/>)
          } else {
            return (<i className="uis uis-star text-2xl" key={index}/>)
          }
        })}
      </div>
  );
}
