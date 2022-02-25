//https://www.typescriptlang.org/docs/handbook/2/classes.html

export class Comment {
  rating!:number;
  comment!:string;
  author!:string;
  date:string = new Date().toDateString();
}

export class Dish {
  id!: string;
  name!: string;
  image!: string;
  category!: string;
  featured!: boolean;
  label!: string;
  price!: string;
  description!: string;
  comments?: Array<Comment>;
}
