import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <>
      <HomePage
        slides={[
          {
            imageSrc: "/images/image1.jpg",
            title: "Title 1",
            description: "Description for image 1",
            backgroundImage: "/images/background1.jpg",
            buttonText: "Next",
            buttonBackgroundColor: "bg-blue-500",
          },
          {
            imageSrc: "/images/image2.jpg",
            title: "Title 2",
            description: "Description for image 2",
            backgroundImage: "/images/background2.jpg",
            buttonText: "Next",
            buttonBackgroundColor: "bg-green-500",
          },
          {
            imageSrc: "/images/image3.jpg",
            title: "Title 3",
            description: "Description for image 3",
            backgroundImage: "/images/background3.jpg",
            buttonText: "Next",
            buttonBackgroundColor: "bg-red-500",
          },
        ]}
      />
    </>
  );
}
