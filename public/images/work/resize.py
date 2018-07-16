import os, sys
from PIL import Image

path = os.getcwd()
filenames = os.listdir(path)
size = 600,400

for infile in filenames:
    outfile = os.path.splitext(infile)[0] + ".thumbnail"
    if infile != outfile:
        try:
            im = Image.open(infile)
            im.thumbnail(size)
            im.save(outfile, "JPEG")
            print "did it"
        except IOError:
            print "cannot create thumbnail for", infile