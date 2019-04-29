# 3. given a sentence find the frequency of each character in the sentence, ignoring whitespace characters
#    input: "I solemnly swear that I am up to no good."
#    output: {"I"=>2, "s"=>2, "o"=>5, "l"=>2 etc...}

def letter_frequency(str)
  freq = Hash.new(0)
  str.each_char do |char|
    next if char.match(/^\W/)
    freq[char] += 1
  end
  freq
end
