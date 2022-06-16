def encrypt(string, shift):
    result = ''
    
    for char in string:
        if char == ' ':
            result = result + char
        elif char.isupper():
            result = result + chr((ord(char) + shift - 65) % 26 + 65)
        else:
            result = result + chr((ord(char) + shift -97) % 26 + 97)

    return result