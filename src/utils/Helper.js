
export function filterData(searchText, restaurantList){
    const searchD = restaurantList.filter((rest) =>
      rest?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );
    return searchD;
  }