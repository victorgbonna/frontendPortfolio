export function getCurrentDate(seperator="-"){
    let newDate= new Date()
    let date= newDate.getDate()
    let month= newDate.getMonth()
    let year= newDate.getFullYear()
    return `${year}${seperator}${month<10?`0${month}`:`${month}`}${seperator}${date}`
}
export function aMonthTime(date){
    let dateArray= date.split('-')
    dateArray[1]=`${parseInt(dateArray[1])+1}`
    const newdate=dateArray.join('-')
    return new Date(newdate)
}
export function getMonthDiff({dateFrom,dateTo}){
    let months;
    months = (dateTo.getFullYear() - dateFrom.getFullYear()) * 12;
    months -= dateFrom.getMonth();
    months += dateTo.getMonth();
    return months <= 0 ? 0 : months;
}
export function getDayDiff({dateFrom,dateTo}){
    const date1 = new Date(dateFrom);
    const date2 = new Date(dateTo);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays 
}   
export function isTimeGreaterThan({bigTime, smallTime}){
    const [bigTimeHr, bigTimeMin]= bigTime.split(':')
    const [smallTimeHr, smallTimeMin]= smallTime.split(':')

    if(parseInt(smallTimeHr)<parseInt(bigTimeHr)) return true
    if(smallTimeHr==bigTimeHr){
        if(parseInt(smallTimeMin)<parseInt(bigTimeMin)) return true        
    }
    return false
}   