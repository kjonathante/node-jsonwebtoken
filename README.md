# JWT

## Using keys instead of secret
- source: https://blog.miguelgrinberg.com/post/json-web-tokens-with-public-key-signatures
- source: https://medium.com/@siddharthac6/json-web-token-jwt-the-right-way-of-implementing-with-node-js-65b8915d550e

## Don't add passphrase
```
ssh-keygen -t rsa -b 4096 -m PEM -f jwt.key
openssl rsa -in jwt.key -pubout -outform PEM -out jwt.key.pub

```
