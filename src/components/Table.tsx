
export default function Table() {
  const data = [
    { id: 1, name: "Item 1", description: "Description for Item 1" },
    { id: 2, name: "Item 2", description: "Description for Item 2" },
    { id: 3, name: "Item 3", description: "Description for Item 3" },
  ];
  const columns = Object.keys(data[0]) as Array<keyof typeof data[0]>;
    return (
    <div>
      <table>
        <thead>
            <tr>
                {columns.map((key)=>(
                    <th key={key}> {key} </th>
                ))}
            </tr>
        </thead>
        <tbody>
        {/* {
            data.map((item,index)=> {
                return (
                    <tr key={index}>{Object.values(item).map((v,i) => (<td key={i}>{v}</td>))}</tr>)
            })
        } */}
        {
            data.map((item,index)=> (
                <tr key={index}><td><input type="radio" name="select" /></td>{columns.map((key,i) => (<td key={i}>{item[key]}</td>))}<td><button>edit</button></td></tr>
            ))
        }
        </tbody>
      </table>
      <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
    </div>
  );
}