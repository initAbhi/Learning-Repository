from itertools import product

# File to save the passwords
output_file = "password_file.txt"

# Generate all combinations
with open(output_file, "w") as file:
    for combination in product("1234567890", repeat=5):
        password = "".join(combination)
        file.write(password + "\n")

print(f"Password file '{output_file}' created successfully!")
