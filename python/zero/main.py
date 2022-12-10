# @types = int, float, bool, str (default is str)
# print type with command 'type'
# format with print
# strong typing
# convert with isnumeric, isalpha, isalnum, isupper, etc... writed is to auto complety
# arithmetic operators +, -, *, /, **, // e %

#value = str(input("digite seu valor: "))

name = 'Allyson Santana'
age = 20

print(f'Hi, {name}', type(name) == str)
print(f'Hi, {age}',  type(name) == float)

# str function
print('\n')

print('contains only space: ', name.isspace())
print('is number: ', name.isnumeric())
print('is alpha: ', name.isalpha())
print('is upper: ', name.isupper())
print('is lower: ', name.islower())
print('is title: ', name.istitle())
print('is title: ', name[0])
print('get chars: ', name[0:3]) # A l l y s o n
print('get chars: ', name[0:8:2]) # A l l y s o n
print('get chars: ', name[:3]) # A l l y s o n
print('get chars: ', name[3:]) # A l l y s o n
print('length: ', len(name))
print('length char == "l": ', name.count('l'))
print('find "l":', name.find('l')) # or -1
print('find all "l":', name.rfind('l')) # or -1
print('exits in :', 'lly' in name)
print('replace:', name.replace('lyson', 'isu'))
print('lower:', name.lower())
print('upper:', name.upper())
print('capitalize:', name.capitalize())
print('title:', name.title())
print('remove spaces with strip:', name.strip())
print('split:', name.split())
print('join:', ('-'.join(name.split())))


# number function -> order => () => ** => *, /, //, % => +, -
print('\n')

print('Pega a divisão inteira', 5 // 2)
print('Pega o resto da divisão inteira', 5 % 2)

#imports
print('\n')

import math, random

number = float(144);
print('raiz quadrada: ', format(number ** (1/2)), 'com lib Math:', math.sqrt(number))
print('random:', random.random())

# conditions
print('\n')

if name in 'Allyson Santana':
    print("if is equal Allyson Santana used in")
elif name == 'Allyson':
    print("if is name equal Allyson used ==")
else:
    print("if not is name Allyson Santana")

#loops => for && while
print('\n')

shopsCloud = ['AWS', 'Azure', 'Google Cloud']

for platformCloud in shopsCloud:
    print(platformCloud)
print('the end loop for')

print('\n')
for i in range(0, len(shopsCloud),1):
    print(shopsCloud[i])
print('the end loop for with controller "i"')

print('\n')
for name in name:
    print(name)
print('the end loop for in var name')

par = 0
impar = 0
print('\n')
while number >= 0:
    if (number % 2) == 0:
        par += 1
    else:
        impar += 1
    number -= 1
print(f'pares: {par} e impares: {impar}')

sexy = 'M' # str(input('Informe se sexo: [M,F] ')).strip().upper()[0]
while sexy not in 'MF':
    sexy = str(input('informe um sexo valido: [M,F] ')).strip().upper()[0]
print(f'Sexo informado foi {sexy}')


#lists

# add end
shopsCloud.append('test-end')
# add start
shopsCloud.insert(0, 'tets-startt')
# removes
del shopsCloud[0]
shopsCloud.remove('test-end')
shopsCloud.pop()

print(f'shopsCloud: {shopsCloud}')

#ordena
values = list(range(4,11))
values.sort()
print(f'values: {values}')
values.sort(reverse=True)
print(f'values: {values}')


peoples = list()
data = list()

peoples = [['Allyson', 12], ['Cardoso', 2], ['Luiz', 20]]
# for _ in range(0,3):
#     data.append(str(input('nome: ')))
#     data.append(int(input('idade: ')))
#     peoples.append(data[:])
#     data.clear()

print(f'Quantidade de pessoas: {len(peoples)}, {peoples}')


# continue in FUNCTION....