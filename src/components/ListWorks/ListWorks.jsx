import React from "react";
import { Link } from "react-router-dom";
import trabajos from "../../Data/trabajos";

const ListWorks = ({ limit }) => {
  return (
    <section className="works">
      {trabajos.slice(0, limit).map((t) => (
        <article key={t.id} className="workItem">
          <div className="mask">
            <img src={"/img/" + t.id + ".jpg"} alt={t.title} />
          </div>
          <span>{t.categorys}</span>
          <h2>
            <Link to={"/proyecto/" + t.id}>{t.title}</Link>
          </h2>
          <h3>{t.techs}</h3>
        </article>
      ))}
    </section>
  );
};

export default ListWorks;
