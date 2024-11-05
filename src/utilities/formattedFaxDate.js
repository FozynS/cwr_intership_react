import { changeTimeConvention } from "./changeTimeConvention";

export const formattedFaxDate = (data) => {
    const timeOffset = 7200000;

    const timeStamp = new Date();

    const currentDay = timeStamp.getDate();
    const currentMonth =
        timeStamp.getMonth() + 1 > 10
            ? timeStamp.getMonth() + 1
            : "0" + (timeStamp.getMonth() + 1);
    const currentYear = timeStamp.getFullYear();

    const currentDate = `${currentMonth}:${currentDay}:${currentYear}`;

    const initialDate = data.split(" ");
    const date = initialDate[0];
    const time = initialDate[1].split(":");

    let newDateMonth = date.split(":")[0];
    let newDateDay = date.split(":")[1];
    let newDateYear = date.split(":")[2];

    let generateDate = new Date(
        newDateYear,
        newDateMonth - 1,
        newDateDay,
        time[0],
        time[1],
        time[2],
    );
    let generatedOffsetTime = new Date(generateDate.getTime() + timeOffset);

    const formattedMonth =
        generatedOffsetTime.getMonth() + 1 >= 10
            ? generatedOffsetTime.getMonth() + 1
            : "0" + (generatedOffsetTime.getMonth() + 1);
    const formattedDay =
        generatedOffsetTime.getDate() >= 10
            ? generatedOffsetTime.getDate()
            : "0" + generatedOffsetTime.getDate();
    const formattedYear = generatedOffsetTime.getFullYear();

    const formattedDate = `${formattedMonth}:${formattedDay}:${formattedYear}`;

    if (formattedDate === currentDate) {
        let timeObject = {
            hours:
                generatedOffsetTime.getHours() >= 10
                    ? generatedOffsetTime.getHours()
                    : "0" + generatedOffsetTime.getHours(),
            minutes:
                generatedOffsetTime.getMinutes() >= 10
                    ? generatedOffsetTime.getMinutes()
                    : "0" + generatedOffsetTime.getMinutes(),
            getHours() {
                return this.hours;
            },
            getMinutes() {
                return this.minutes;
            },
        };

        changeTimeConvention(timeObject);
        return changeTimeConvention(timeObject);
    }

    return `${formattedMonth}/${formattedDay}/${formattedYear}`;
};
