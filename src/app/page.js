

export default function Home() {
  return (
    <>
      <section className="w-screen h-screen flex justify-center items-center">
        <div class="w-80 flex flex-col gap-4 text-xl">
          <a href="categories">
            <button class="w-full bg-slate-200 px-4 py-2 rounded-sm hover:bg-white">Categories</button>
          </a>
          <a href="products">
            <button class="w-full bg-slate-200 px-4 py-2 rounded-sm hover:bg-white">Products</button>
          </a>
          <a href="aboutUs">
            <button class="w-full bg-slate-200 px-4 py-2 rounded-sm hover:bg-white">About Us</button>
          </a>
        </div>
      </section>
    </>
  );
}
