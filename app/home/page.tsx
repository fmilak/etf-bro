'use client';

import Counter from "@/app/home/components/Counter";
import Todos from "@/app/home/components/Todos";


const Home = () => {

  return (
    <div>
      <h1>Home</h1>
      
      <span>Home page</span>
      <Counter />
      
      <Todos />
    </div>
  );
};

export default Home;