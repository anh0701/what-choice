export function getTimeContext() {
    const hours = new Date().getHours();
    // Bữa chính: Sáng (6-9h), Trưa (11-13h), Tối (18-20h)
    const isMainMealTime = 
        (hours >= 6 && hours <= 9) || 
        (hours >= 11 && hours <= 13) || 
        (hours >= 18 && hours <= 20);
    
    // Ăn khuya: Sau 22h
    const isLateNight = hours >= 22 || hours <= 4;

    return { isMainMealTime, isLateNight };
}
