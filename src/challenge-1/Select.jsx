import React, { useState } from "react";
import { Select, Form } from "antd";
import Title from "antd/es/skeleton/Title";

const SelectComponent = () => {
  const [countryGroups, setCountryGroups] = useState([
    {
      name: "Весь мир",
      id: 0,
      countries: [], // Will be populated later
    },
    {
      name: "ЕС",
      id: 1,
      countries: [
        "Австрия",
        "Бельгия",
        "Болгария",
        "Венгрия",
        "Германия",
        "Греция",
        "Дания",
        "Ирландия",
        "Испания",
        "Италия",
        "Кипр",
        "Латвия",
        "Литва",
        "Люксембург",
        "Мальта",
        "Нидерланды",
        "Польша",
        "Португалия",
        "Румыния",
        "Словакия",
        "Словения",
        "Финляндия",
        "Франция",
        "Хорватия",
        "Чехия",
        "Швеция",
        "Эстония",
      ],
    },
    {
      name: "Африка",
      id: 2,
      countries: [
        "Алжир",
        "Ангола",
        "Бенин",
        "Ботсвана",
        "Буркина-Фасо",
        "Бурунди",
        "Габон",
        "Гамбия",
        "Гана",
        "Гвинея",
        "Гвинея-Бисау",
        "Джибути",
        "Египет",
        "Замбия",
        "Зимбабве",
        "Кабо-Верде",
        "Камерун",
        "Кения",
        "Коморские Острова",
        "Демократическая Республика Конго",
        "Республика Конго",
        "Кот-д’Ивуар",
        "Лесото",
        "Либерия",
        "Ливия",
        "Маврикий",
        "Мавритания",
        "Мадагаскар",
        "Малави",
        "Мали",
        "Марокко",
        "Мозамбик",
        "Намибия",
        "Нигер",
        "Нигерия",
        "Руанда",
        "Сан-Томе и Принсипи",
        "Сахарская Арабская Демократическая Республика",
        "Сейшельские острова",
        "Сенегал",
        "Сомали",
        "Сомалиленд",
        "Судан",
        "Сьерра-Леоне",
        "Танзания",
        "Того",
        "Тунис",
        "Уганда",
        "ЦАР",
        "Чад",
        "Экваториальная Гвинея",
        "Эритрея",
        "Эсватини",
        "Эфиопия",
        "Южно-Африканская Республика",
        "Южный Судан",
      ],
    },
    {
      name: "Северная Америка",
      id: 3,
      countries: [
        "Антигуа и Барбуда",
        "Багамские Острова",
        "Барбадос",
        "Белиз",
        "Бермудские острова",
        "Виргинские Острова (Британские)",
        "Виргинские Острова (США)",
        "Гаити",
        "Гватемала",
        "Гондурас",
        "Гренада",
        "Доминика",
        "Доминиканская Республика",
        "Канада",
        "Коста-Рика",
        "Куба",
        "Мексика",
        "Никарагуа",
        "Панама",
        "Сент-Китс и Невис",
        "Сент-Люсия",
        "Сент-Винсент и Гренадины",
        "Соединенные Штаты Америки",
        "Тринидад и Тобаго",
        "Ямайка",
      ],
    },
    {
      name: "Южная Америка",
      id: 4,
      countries: [
        "Аргентина",
        "Боливия",
        "Бразилия",
        "Венесуэла",
        "Гайана",
        "Колумбия",
        "Парагвай",
        "Перу",
        "Суринам",
        "Уругвай",
        "Чили",
      ],
    },
    {
      name: "Ближний восток",
      id: 5,
      countries: [
        "Бахрейн",
        "Египет",
        "Израиль",
        "Иордания",
        "Ирак",
        "Иран",
        "Катар",
        "Кипр",
        "Кувейт",
        "Ливан",
        "ОАЭ",
        "Оман",
        "Палестина",
        "Саудовская Аравия",
        "Сирия",
        "Судан",
        "Турция",
        "Йемен",
      ],
    },
    {
      name: "Страны СНГ",
      id: 6,
      countries: [
        "Азербайджан",
        "Армения",
        "Белоруссия",
        "Казахстан",
        "Киргизия",
        "Молдавия",
        "Россия",
        "Таджикистан",
        "Туркменистан",
        "Узбекистан",
      ],
    },
    {
      name: "Австралия и Новая Зеландия",
      id: 7,
      countries: ["Австралия", "Новая Зеландия"],
    },
  ]);
  const [activeWholeWorld, setActiveWholeWorld] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState([]);

  const [activeGroupName, setActiveGroupName] = useState("");
  const handleChange = (value) => {
    console.log(value);
    if (value.length <= 0) {
      setActiveGroupName(false);
      setActiveWholeWorld(false);
      setSelectedCountries([]);
    } else if (value.includes("Весь мир")) {
      setActiveGroupName(value.includes("Весь мир"));
      setActiveWholeWorld(true);
      setSelectedCountries(
        countryGroups.map((item) => {
          return item.countries;
        })
      );
    } else {
   

      const selectedGroup = value
        .map((selectedCountry) => {
          return countryGroups.find((group) =>
            group.name.includes(selectedCountry)
          );
        })
        .filter((group) => group !== undefined);
      if (!selectedGroup) {
        onsole.log(selectedGroup, "something go wrong ");
        return;
      } else {
        const choosedCountries = selectedGroup.flatMap((c) => {
          return c.countries;
        });
        setActiveWholeWorld(false);
        // console.log(choosedCountries);
        setSelectedCountries(choosedCountries);
      }
    }
  };

  const countriesArr = countryGroups.flatMap((group) => group.countries);

  const sortedCountriesArr = countriesArr.slice().sort((a, b) => {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  return (
    <>
      <div className="">
        {selectedCountries.map((name, i) => {
          return <p key={i}>{name}</p>;
        })}
      </div>

      <Form.Item>
        <Select
          style={{ minWidth: "400px", maxWidth: "500px" }}
          mode="multiple"
          placeholder={"Select country"}
          onChange={handleChange}
          allowClear
          showSearch
          optionFilterProp="children"
        >
          {countryGroups.map((item, i) => {
            return (
              <optgroup
                key={i}
                value={item.name}
                disabled={
                  activeGroupName ? item.name != activeGroupName : undefined
                }
              >
                {item.name}
              </optgroup>
            );
          })}

          <Select.Option key="divider" disabled>
            {"- - - - - - - - - - - - - - - - - - - - - - - - "}
          </Select.Option>
          {activeWholeWorld
            ? undefined
            : sortedCountriesArr.map((name, i) => {
                return (
                  <Select.Option key={`${i}-unique-keys`} value={name}>
                    {name}
                  </Select.Option>
                );
              })}
        </Select>
      </Form.Item>
    </>
  );
};
export default SelectComponent;
