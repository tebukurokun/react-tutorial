import { useState } from "react";
import { List } from "./List";

function App() {
  const [description, setDescription] = useState("クリック前の表示");

  const changeDescription = () => {
    setDescription("クリック後の表示です。");
  };

  return (
    <div>
      {description}
      <br />
      ゼロから始めるReact入門
      <List title="取り扱い言語一覧" /> {/* 追加 */}
      <button onClick={changeDescription}>ボタン</button>
    </div>
  );
}

export default App;
