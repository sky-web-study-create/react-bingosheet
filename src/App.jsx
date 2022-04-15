import "./App.css";
//lodash(配列の縦横入替に使用)
import lodash from "lodash";

export const App = () => {
  //BINGOのタイトル表示
  const heads = ["B", "I", "N", "G", "O"];
  const headsName = heads.map((head) => <th key={head}>{head}</th>);

  const createColumn = (col) => {
    const source = [];
    //bingo各列に入りうる数字を配列に入れる
    for (let i = 0; i < 15; i++) {
      source[i] = i + 1 + 15 * col;
    }

    const column = [];

    //source配列の数値をランダムに取り出して格納
    for (let i = 0; i < 5; i++) {
      column[i] = source.splice(Math.random() * source.length, 1)[0];
    }

    return column;
  };

  const bingoDataCreate = () => {
    const columns = [];

    //bingoの数値を入れる
    for (let i = 0; i < 5; i++) {
      columns[i] = createColumn(i);
    }

    //bingoの配列の真ん中は'FREE'にする
    columns[2][2] = "FREE";

    return columns;
  };

  const bingoColumns = bingoDataCreate();
  //配列の縦横を入替
  const bingoData = lodash.unzip(bingoColumns);
  const bodyData = bingoData.map((row1) => (
    <tr key={row1}>
      {row1.map((row2) => (
        <td key={row2}>{row2}</td>
      ))}
    </tr>
  ));

  return (
    <>
      <table>
        <thead>
          <tr>{headsName}</tr>
        </thead>
        <tbody>
          {bodyData}
        </tbody>
      </table>
    </>
  );
};
