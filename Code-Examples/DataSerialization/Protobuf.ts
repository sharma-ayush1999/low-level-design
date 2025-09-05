import protobuf from "protobufjs";

async function main() {
    // Load the .proto definition
    const root = await protobuf.load("user.proto");

    // Lookup the "User" message type
    const User = root.lookupType("User");

    // Create a payload (our plain JS object)
    const payload = {
        id: 101,
        name: "Alice",
        email: "alice@example.com",
        active: true,
    };

    // Verify the payload against the schema
    const errMsg = User.verify(payload);
    if (errMsg) throw Error(errMsg);

    // Encode to binary (protobuf format)
    const message = User.create(payload);
    const buffer = User.encode(message).finish();
    console.log("Serialized (binary):", buffer);

    // Decode back from binary
    const decoded = User.decode(buffer);
    console.log("Decoded object:", decoded);

    // Convert to plain JS object
    const object = User.toObject(decoded, { enums: String, longs: String });
    console.log("Deserialized JS object:", object);
}

main().catch(console.error);
