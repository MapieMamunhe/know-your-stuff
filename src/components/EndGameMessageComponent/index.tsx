import React from "react";
import "./css/index.css";
import {
  FacebookFilled,
  WhatsAppOutlined,
  LinkedinFilled,
} from "@ant-design/icons";
export default function EndGameMessageComponent({
  message,
}: {
  message: String;
}) {
  return (
    <>
      <div className="msgComponentClass"> {message}</div>
      <nav id="shareLinks">
        <h2>Coisas são melhores quando caem na moda...Partilhe o Jogo!</h2>
        <p className="shareLinks">
          <span>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://whoisthis-mapiemamunhe.vercel.app"
              target="_blank"
            >
              Facebook &nbsp;
              <FacebookFilled />
            </a>
          </span>
          <span>
            <a
              style={{ color: "green" }}
              href="whatsapp://send?text=Conheces jogadores de ⚽? Venha e Descubra! https://whoisthis-mapiemamunhe.vercel.app"
              data-action="share/whatsapp/share"
              target="_blank"
            >
              Whatsapp &nbsp;
              <WhatsAppOutlined />
            </a>
          </span>
          <span>
            {/* LinkedIn (url, title, summary, source url) */}
            <a
              target="_blank"
              href="https://www.linkedin.com/shareArticle?url=https://whoisthis-mapiemamunhe.vercel.app&title=Teste seu conhecimento sobre o mundo de futebol"
            >
              LinkedIn &nbsp; <LinkedinFilled />
            </a>
          </span>
        </p>
      </nav>
    </>
  );
}
