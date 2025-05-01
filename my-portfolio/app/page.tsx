import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="italic mb-8 text-sm font-medium">
        3 cups of Python, 2 cups of Machine Learning, 1 cup of DevOps, and a pinch of Rust.
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Hi! Welcome to my personal blog/portfolio. I write about topics that interests or ones found useful, usually on cloud, machine learning and software engineering.
        </p>
      </div>
    </section>
  );
}
