#!/usr/bin/env python
source = open('psi.js', 'r')
dest = open('psidoc.js', 'w')

for line in source:
    sourceline = line.strip().split(':')[0]
    indent = (len(line) - len(line.lstrip())) * ' '
    if len(sourceline.split()) == 1:
        if hasattr(str, sourceline):
            method = getattr(str, sourceline)
            docstring = method.__doc__
            dest.write('\n' + '\n'.join([(indent + '// ' + x) for x in docstring.split('\n')]) + '\n');
    dest.write(line)

