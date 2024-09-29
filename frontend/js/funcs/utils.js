const showSwal = (title, icon, buttons, callback) => {
  swal({
    title,
    icon,
    buttons,
  }).then((result) => callback(result));
};

const saveIntoLocalStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) => {
  return JSON.stringify(localStorage.getItem(key));
};

const getToken = () => {
  const userInfos = JSON.parse(localStorage.getItem("user"));
  return userInfos ? userInfos.token : null;
};

const isLogin = () => {
  const userInfos = localStorage.getItem("user");
  return userInfos ? true : false;
};

const getUrlParam = (key) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key);
};

const searchInArray = (array, searchProperty, searchValue) => {
  let outputArray = array.filter((item) =>
    item[searchProperty].includes(searchValue)
  );

  return outputArray;
};


const addParamToURL = (param, value) => {

  console.log(param , value);
  const url = new URL(location.href)
  console.log(url);
  const searchParams = url.searchParams
  console.log(searchParams);
  searchParams.set(param,value)
  console.log(searchParams);
  url.search = searchParams.toString()
  console.log(url);
  
  location.href = url.toString()
  
  
  
  
  
  
}

const paginate = (array,itemPerPage,paginateWrapper,currentPage) => {
  paginateWrapper.innerHTML = ""
let pageCount = Math.ceil(array.length / itemPerPage)
let endIndex = itemPerPage * currentPage
let startIndex = endIndex - itemPerPage
let paginatedItems = array.slice(startIndex , endIndex)



for(let i=1;i < pageCount + 1 ; i++){

  paginateWrapper.insertAdjacentHTML("beforeend" , `
        <li class="courses__pagination-item">
        ${i === Number(currentPage) ? `

          <a onclick="addParamToURL('page',${i})" class="courses__pagination-link courses__pagination-link--active">
          
          ` : `
          <a onclick="addParamToURL('page',${i})" class="courses__pagination-link">

          `}
                ${i}
              </a>
            </li>
    
    `)
  
}

return paginatedItems
  

}

export {
  showSwal,
  saveIntoLocalStorage,
  getFromLocalStorage,
  getToken,
  isLogin,
  getUrlParam,
  searchInArray,
  paginate,
  addParamToURL,
};
