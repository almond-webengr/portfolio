import { Breadcrumbs, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Child1 = () => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/Production">
          制作物
        </Link>
        <Typography color="text.primary">No.1</Typography>
      </Breadcrumbs>
      <h1>2FA</h1>

      <a href="https://github.com/almond-webengr/2FA" target="_blank">ソースコード</a>

      <h2>概要</h2>
      <p>入力されたメールアドレスにワンタイムパスワードを送り入力してもらう二段階認証を実装しました</p>
      <p>メールを再送でき、60sで生成されたパスワードを無効にする処理を行っております</p>

      <h2>画面</h2>
      <video style={{ width: "80%", height: 270 }} controls preload="none">
        <source src="/portfolio/No.1/2FADemo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <p>実際に届くメール</p>
      <Image
        src="/portfolio/No.1/Message.png"
        alt="メッセージ"
        width={480}
        height={270}
        style={{ width: "80%", height: "auto" }}
      />

      <p>ドメインも正確なものか判定します</p>
      <Image
        src="/portfolio/No.1/ValidationLogin1.png"
        alt="バリデーション_ログイン1"
        width={480}
        height={270}
        style={{ width: "80%", height: "auto" }}
      />
      <Image
        src="/portfolio/No.1/ValidationLogin2.png"
        alt="バリデーション_ログイン2"
        width={480}
        height={270}
        style={{ width: "80%", height: "auto" }}
      />

      <p>ワンタイムパスワードエラー</p>
      <Image
        src="/portfolio/No.1/ValidationPassword.png"
        alt="バリデーション_パスワード入力"
        width={480}
        height={270}
        style={{ width: "80%", height: "auto" }}
      />


      <h2>制作期間</h2>
      <p>2週間程度</p>

      <h2>制作理由</h2>
      <ul>
          <li>現代のWebシステムの構成要素としてメジャーであると考えたから</li>
          <li>1つ目に選ぶ人は少なそうなので、差別化できると考えたから</li>
          <li>あまり複雑化せず、フルスタックの勉強になりそうだったから</li>
      </ul> 

      <h2>使用技術</h2>
      <p>フロントエンド領域：React20、Next.js16</p>
      <p>バックエンド領域：Django5.0.4、Python3.12-bullseye</p>
      <p>基盤：Ubuntu 24.04.2 LTS（WSL2）</p>
      
      <h2>技術選定理由</h2>
      <ul>
          <li>参考にした本にてこちらの技術が使用されていたから</li>
          <li>現在主流であるReactの勉強になるから</li>
          <li>フロントエンドとバックエンドの通信方法を学べるから</li>
      </ul>      

      <h2>難しかった点</h2>
      <ul>
        <li>再送処理</li>
        <p>ログイン画面で入力させたメールアドレスの保存方法の検討が必要で、Cookieを用いることで解決しました</p>
        <li>実装場所の判断</li>
        <p>フロントエンドは描画、バックエンドはデータ操作を前提にしましたが、はじめは各機能でどちらが最適かを判断することに戸惑いました</p>
      </ul>   


      <h2>今後の展望</h2>
      <ul>
        <li>データベースを用いて、事前に登録したユーザー情報と照合できるようにする</li>
        <li>簡単のためメールアドレスのみだったが、パスワードも入力させるよう変更する</li>
        <li>セキュリティへの対策を行う</li>
        <li>別システムへ組み込めるようにする</li>
      </ul>   



      <h2>参考</h2>
      <p>Amazonへのリンクです</p>
      <a href="https://amzn.asia/d/02cEqNn4" target="_blank">実装で学ぶフルスタックWeb開発 エンジニアの視野と知識を広げる「一気通貫」型ハンズオン</a>
      <p>株式会社オープントーン (著), 佐藤 大輔 (著), 伊東 直喜 (著), 上野 啓二 (著)</p>
    </>
  );
};

export default Child1;