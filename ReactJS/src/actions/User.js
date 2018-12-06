import axios from "axios";

export function ubahUserNameSuccesss(name) {
  return {
    type: 'UBAH_USERNAME',
    payload: {
      username: name,
    },
  };
};

export function ubahUserName() {
  return (dispatch) => {
    axios
    .get("https://swapi.co/api/people/")
    .then(response => {
      let data = response.data.results;
      console.log({data})

      let names = data.map(datum => datum.name);
      let newUserName = names[0]
      dispatch(ubahUserNameSuccesss(newUserName))
    })
    // .catch (err =>  {
    //   dispatch(ubahUserNameFailed(err.message))
    // })
  }
}

export function ubahGenderSuccesss(gender) {
  return {
    type: 'UBAH_GENDER',
    payload: {
      gender: gender
    }
  }
}

export function ubahGender() {
  return (dispatch) => {
    axios.get("https://swapi.co/api/people/")
    .then(response => {
      const data = response.data.results;
      const genders = data.map(datum => datum.gender)
      const gender = genders[0]
      dispatch(ubahGenderSuccesss(gender))
    })
  }
}

export function ubahEmail() {
  return {
    type: 'UBAH_EMAIL',
    payload: {
      email: 'fadly.kayo@gmail.com',
    },
  };
};

export function ubahPhoneNumber() {
  return {
    type: 'UBAH_PHONE_NUMBER',
    payload: {
      phone_number: '11111111',
    },
  };
};