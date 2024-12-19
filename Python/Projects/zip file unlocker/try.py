import pyzipper

# Path to the zip file and password file
zip_file_path = "Adobe Photoshop 2025.zip"
password_file_path = "password_file.txt"

# File to save the result (optional)
output_file = "brute_force_results.txt"

try:
    # Open the zip file
    with pyzipper.AESZipFile(zip_file_path, 'r') as zip_file:
        # Open and read the password file
        with open(password_file_path, 'r') as password_file:
            for line in password_file:
                password = line.strip()  # Remove extra spaces or newline characters
                try:
                    # Attempt extraction with the password
                    zip_file.extractall(pwd=password.encode())
                    print(f"Password found: {password}")
                    # Optionally, save the found password to a file
                    with open(output_file, "a") as result_file:
                        result_file.write(f"Password found: {password}\n")
                    break
                except (RuntimeError, pyzipper.BadZipFile):
                    print(f"Tried password: {password}")
except FileNotFoundError:
    print("Password file or ZIP file not found. Please check the file paths.")
