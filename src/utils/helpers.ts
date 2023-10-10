export const getFormattedDataForChart = (data: any) => {
    return data?.map(item => {
        return {
            ...item,
            name: item.name.common,
            population: item.population,
            area: item.area < 0 ? 0 : item.area,
        }
    })
}

export const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }