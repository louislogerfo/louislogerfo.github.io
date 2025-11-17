# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: 5
My Partner's Key: 7

Our initial shared key: 12

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message                    | Decoded Message                 | Key |
| ---------------                    | ---------------                 | --- |
|Tu tai mdq kag                       hi how are you                      12
 pfl evvu yrzitlk                     you need haircut                    17
 O qtuc os mkzzotm utk znoy ckkqktj   I know im getting one this weekend  6
gzud xnt sqhdc knnjrlzwwwwhmf         have you tried looksmaxxxxing      25
|                 |                 |     |
|                 |                 |     |
`|                 |                 |     |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here: 5

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 01100101, 01011001, 01100111, 01000111, 01111000

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: [Louis LoGerfo]
    Destination: [Aidan]  
    Sequence: 1/3
    Data: [01100101, 01011001]
    =========
    Packet 2:

    Source: [Louis LoGerfo]
    Destination: [Aidan]
    Sequence: 2/3 
    Data: [01100111, 01000111]
    =========
    Packet 3:

    Source: [Louis LoGerfo]
    Destination: [Aidan]
    Sequence: 3/3
    Data: [01111000]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation? symmetric encryption uses the same secret key while asymmetric encryption uses a pair of keys,in the start we used asymmetric encryption to combine keys to make one key, which we then used for encrypting our messages through symmetric encryption.
- Why is it important that this protocol uses a new key for each message? So that the decrypting process would be way more difficult from another perspective, and because it followed a different formula which changed the keys which hackers would not have access to.
- Why is it important that you never share your secret key? Because then someone could possibly gain access to it to decrypt your messages.
- In the transport layer, do these messages use TCP or UDP? Why? TCP is for when the packets have to be recieved indentical to how they were sent, this is for videos, movies, video games, etc. UCP is where the packets received does not have to be identical to make things more quick. In this process of encryption TCP was used because the information sent had to be identical otherwise we could have potentially recieved the wrong keys.
- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer. Once the packets are in the internet layers, they will already have been given a IP Adress which locates their next destination, the packets well be send to their IP adress in the quickest known way. Although nothing is guarenteed as anything can get lost or corrupted. Once the neccesary packets reach its destination in the link layer it will be converted to physical data which will be finally sent through the network through bluetooth, wifi, etc
- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other
information can they still see? The encrypted messages, and the public key.
