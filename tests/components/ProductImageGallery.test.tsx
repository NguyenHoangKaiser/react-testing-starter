import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should not render when there are no images", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("should render correct number of images", () => {
    const imageUrls = ["image1.jpg", "image2.jpg", "image3.jpg"];
    render(<ProductImageGallery imageUrls={imageUrls} />);

    const images = screen.getAllByRole("img");
    expect(images.length).toBe(imageUrls.length);

    images.forEach((img, index) => {
      expect(img).toHaveAttribute("src", imageUrls[index]);
    });
  });
});
