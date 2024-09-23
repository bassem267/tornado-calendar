import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <>
      <HomePage
        image1Src="/images/image1.jpg"
        image2Src="/images/image2.jpg"
        title1="Welcome to my website"
        title2="Explore my new content"
        description1="This is a simple Next.js template with Tailwind CSS and TypeScript."
        description2="The images and text dynamically change with a smooth swipe effect."
        buttonText="Explore"
        buttonBackgroundColor="bg-white"
        backgroundImage1="/images/background1.jpg"
        backgroundImage2="/images/background2.jpg"
      />
    </>
  );
}
