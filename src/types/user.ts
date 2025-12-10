export type User = {
    id: number,
    name: string,
    email: string,
    phone: number,
    username: string,
    website: string,
    company: {
      bs: string,
      catchPhrase: string,
      name: string
    },
    address: {
      city: string, 
      street: string,
      suite: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    }
  }

export type UserArray = User[]