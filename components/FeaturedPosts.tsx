// Importing required components and modules
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

// Defining the FeaturedPosts component
const FeaturedPosts = () => {
  return (
    // Section container with responsive padding and margin
    <section className="container mx-auto px-6 lg:px-36 mt-9">
      {/* Section Heading */}
      <div className="flex flex-col items-center justify-center text-center space-y-3 mb-12 mt-24">
        {/* Subheading */}
        <p className="text-primaryColor font-semibold text-[0.875rem] uppercase">
          Practice Advice
        </p>
        {/* Main heading */}
        <h2 className="font-bold text-textColor text-[2rem] leading-tight">
          Featured Posts
        </h2>
        {/* Section description */}
        <p className="text-secondtextColor text-[0.875rem] font-normal max-w-[28rem]sm:max-w-max">
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Responsive Card Grid */}
      <div className="grid grid-cols-1 space-y-7 sm:space-y-0 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {/* Card 1 */}
        <Card className="shadow-md rounded-sm overflow-hidden relative">
          {/* NEW Badge */}
          <span className="absolute top-4 left-4 bg-dangerColor text-white text-xs font-bold px-3 py-1 rounded">
            NEW
          </span>
          {/* Post image */}
          <Image
            src="/images/posts/post-1.png"
            alt="Colorful Houses"
            width={348}
            height={300}
            className="w-full h-fit object-cover"
          />
          <CardContent className="p-6">
            {/* Post metadata */}
            <div className="text-[0.85rem] space-x-4 mb-3">
              <span className="text-disabledelementColor">Google</span>
              <span className="text-secondtextColor">Trending</span>
              <span className="text-secondtextColor">New</span>
            </div>
            {/* Post title */}
            <CardTitle className="text-lg font-normal text-textColor leading-snug mb-3">
              Loudest à la Madison #1 <br /> (L'integral)
            </CardTitle>
            {/* Post description */}
            <CardDescription className="text-secondtextColor text-sm mb-4 max-w-[17.5rem]">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </CardDescription>
            {/* Post details (date and comments) */}
            <div className="flex items-center justify-between text-secondtextColor text-xs">
              <p className="flex items-center gap-[0.2rem]">
                <Image
                  src="/images/icons/clock-icon.png"
                  alt="Clock Icon"
                  width={16}
                  height={16}
                  className="w-3 h-3"
                />
                <span className="text-[0.75rem]">22 April 2021</span>
              </p>
              <p className="flex items-center gap-[0.2rem]">
                <Image
                  src="/images/icons/comments-icon.png"
                  alt="Comments Icon"
                  width={16}
                  height={15}
                  className="w-3 h-3"
                />
                <span className="text-[0.75rem]">10 comments</span>
              </p>
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0 space-x-2">
            {/* Learn more link */}
            <Link
              href=""
              className="text-secondtextColor font-semibold text-sm hover:underline"
            >
              Learn More
            </Link>
            <Image
              src="/images/icons/rightarrow-icon.png"
              alt="Arrow Icon"
              width={16}
              height={15}
              className="w-3 h-3"
            />
          </CardFooter>
        </Card>
        {/* Card 2 */}
        <Card className="shadow-md rounded-sm overflow-hidden relative">
          {/* NEW Badge */}
          <span className="absolute top-4 left-4 bg-dangerColor text-white text-xs font-bold px-3 py-1 rounded">
            NEW
          </span>
          {/* Post image */}
          <Image
            src="/images/posts/post-2.png"
            alt="Colorful Houses"
            width={348}
            height={300}
            className="w-full h-fit object-cover"
          />
          <CardContent className="p-6">
            {/* Post metadata */}
            <div className="text-[0.85rem] space-x-4 mb-3">
              <span className="text-disabledelementColor">Google</span>
              <span className="text-secondtextColor">Trending</span>
              <span className="text-secondtextColor">New</span>
            </div>
            {/* Post title */}
            <CardTitle className="text-lg font-normal text-textColor leading-snug mb-3">
              Loudest à la Madison #1 <br /> (L'integral)
            </CardTitle>
            {/* Post description */}
            <CardDescription className="text-secondtextColor text-sm mb-4 max-w-[17.5rem]">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </CardDescription>
            {/* Post details (date and comments) */}
            <div className="flex items-center justify-between text-secondtextColor text-xs">
              <p className="flex items-center gap-[0.2rem]">
                <Image
                  src="/images/icons/clock-icon.png"
                  alt="Clock Icon"
                  width={16}
                  height={16}
                  className="w-3 h-3"
                />
                <span className="text-[0.75rem]">22 April 2021</span>
              </p>
              <p className="flex items-center gap-[0.2rem]">
                <Image
                  src="/images/icons/comments-icon.png"
                  alt="Comments Icon"
                  width={16}
                  height={15}
                  className="w-3 h-3"
                />
                <span className="text-[0.75rem]">10 comments</span>
              </p>
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0 space-x-2">
            {/* Learn more link */}
            <Link
              href=""
              className="text-secondtextColor font-semibold text-sm hover:underline"
            >
              Learn More
            </Link>
            <Image
              src="/images/icons/rightarrow-icon.png"
              alt="Arrow Icon"
              width={16}
              height={15}
              className="w-3 h-3"
            />
          </CardFooter>
        </Card>
        {/* Card 3 */}
        <Card className="shadow-md rounded-sm overflow-hidden relative">
          {/* NEW Badge */}
          <span className="absolute top-4 left-4 bg-dangerColor text-white text-xs font-bold px-3 py-1 rounded">
            NEW
          </span>
          {/* Post image */}
          <Image
            src="/images/posts/post-3.png"
            alt="Colorful Houses"
            width={348}
            height={300}
            className="w-full h-fit object-cover"
          />
          <CardContent className="p-6">
            {/* Post metadata */}
            <div className="text-[0.85rem] space-x-4 mb-3">
              <span className="text-disabledelementColor">Google</span>
              <span className="text-secondtextColor">Trending</span>
              <span className="text-secondtextColor">New</span>
            </div>
            {/* Post title */}
            <CardTitle className="text-lg font-normal text-textColor leading-snug mb-3">
              Loudest à la Madison #1 <br /> (L'integral)
            </CardTitle>
            {/* Post description */}
            <CardDescription className="text-secondtextColor text-sm mb-4 max-w-[17.5rem]">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </CardDescription>
            {/* Post details (date and comments) */}
            <div className="flex items-center justify-between text-secondtextColor text-xs">
              <p className="flex items-center gap-[0.2rem]">
                <Image
                  src="/images/icons/clock-icon.png"
                  alt="Clock Icon"
                  width={16}
                  height={16}
                  className="w-3 h-3"
                />
                <span className="text-[0.75rem]">22 April 2021</span>
              </p>
              <p className="flex items-center gap-[0.2rem]">
                <Image
                  src="/images/icons/comments-icon.png"
                  alt="Comments Icon"
                  width={16}
                  height={15}
                  className="w-3 h-3"
                />
                <span className="text-[0.75rem]">10 comments</span>
              </p>
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0 space-x-2">
            {/* Learn more link */}
            <Link
              href=""
              className="text-secondtextColor font-semibold text-sm hover:underline"
            >
              Learn More
            </Link>
            <Image
              src="/images/icons/rightarrow-icon.png"
              alt="Arrow Icon"
              width={16}
              height={15}
              className="w-3 h-3"
            />
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

// Exporting the FeaturedPosts component
export default FeaturedPosts;
