import os
from PIL import Image

def resize_images_in_directory(directory):
    # Define the maximum width
    max_width = 600

    # Iterate over the files in the specified directory
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
            # Construct the full file path
            file_path = os.path.join(directory, filename)
            
            # Open the image
            with Image.open(file_path) as img:
                width, height = img.size
                
                # Check if the image width is greater than the maximum allowed width
                if width > max_width:
                    # Calculate the new height maintaining the aspect ratio
                    new_height = int((max_width / width) * height)
                    
                    # Resize the image
                    resized_img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                    
                    # Save the resized image back to the same location
                    resized_img.save(file_path)
                    print(f"Resized {filename}")
                else:
                    # If the image is smaller than the max width, do nothing
                    print(f"Skipped {filename}, width is within the limit.")

# Replace 'your_directory_path' with the path of the directory containing the images
resize_images_in_directory('./helpers/data/images')
