export async function addData(currentTab, formData) {
  try {
    const response = await fetch(`/api/${currentTab}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function getData(currentTab) {
  console.log(currentTab);
  
  try {
    const response = await fetch(`/api/${currentTab}/get`, {
      method: "GET",
    });   
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
  }
}


export async function updateData(currentTab, formData) {
  try {
    const response = await fetch(`/api/${currentTab}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}


export async function login( formData) {
  try {
    const response = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}