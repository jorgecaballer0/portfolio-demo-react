/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import trabajos from "../../Data/trabajos";

const Project = () => {
  const id = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    let project = trabajos.filter((p) => p.id === id.id);
    setProject(project[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page pageWork">
      <div className="mask">
        <img src={"/img/" + project.id + ".jpg"} alt={project.title} />
      </div>
      <h1 className="heading">{project.title}</h1>
      <p>{project.techs}</p>
      <p>{project.description}</p>
      <a href={project.url} target="_blank">
        Ir al proyecto
      </a>
    </div>
  );
};

export default Project;
