import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

export default function MetaTags({ ApiUrl }) {
  const [titleseo, setTitleSeo] = useState("");
  const [descseo, setDescSeo] = useState("");
  const [keywordseo, setKeywordSeo] = useState("");

  useEffect(() => {
    fetch(`${ApiUrl}/seo/showseo/1`)
      .then((res) => res.json())
      .then((data) => {
        setDescSeo(data.description_seo);
        setKeywordSeo(data.keywords_seo);
        setTitleSeo(data.title_seo);
      });
  }, []);


  return (
    <div>
      <Helmet>
        <title>{titleseo}</title>
        <meta name="description" content={descseo} />
        <meta name="keywords" content={keywordseo} />
      </Helmet>
    </div>
  );
}
