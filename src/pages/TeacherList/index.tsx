import React, { useState, useEffect } from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import "./styles.css";
import api from "../../services/api";

function TeacherList() {
  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  const [loading, setLoading] = useState(false);
  const [didSearch, setDidSearch] = useState(false);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    setTeachers([]);
    setDidSearch(false);

    if (subject !== "" && week_day !== "" && time !== "") {
      setLoading(true);
      setDidSearch(true);

      api
        .get("/classes", {
          params: {
            subject,
            week_day,
            time,
          },
        })
        .then(({ data }) => {
          setTeachers(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log("search teachers error: ", err);
          setLoading(false);
        });
    }
  }, [subject, week_day, time]);

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffs disponíveis.">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            options={[
              {
                value: "",
                label: "Selecione a matéria",
                disabled: true,
                hidden: true,
              },
              { value: "Eletrônica", label: "Eletrônica" },
              { value: "Física", label: "Física" },
              { value: "Química", label: "Química" },
              { value: "Matemárica", label: "Matemárica" },
            ]}
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              {
                value: "",
                label: "Selecione o dia",
                disabled: true,
                hidden: true,
              },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
              { value: "0", label: "Domingo" },
            ]}
            value={week_day}
            onChange={(event) => setWeekDay(event.target.value)}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </form>
      </PageHeader>

      <main>
        {loading && !didSearch && <p>Pesquisando...</p>}

        {didSearch && teachers.length === 0 && (
          <p>Nenhum professor encontrado com sua pesquisa.</p>
        )}

        {didSearch &&
          teachers.length > 0 &&
          teachers.map((teacher: Teacher) => (
            <TeacherItem key={teacher.id} teacher={teacher} />
          ))}
      </main>
    </div>
  );
}

export default TeacherList;
