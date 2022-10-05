import {register} from "../../src/lib/auth.js"
import {createUserWithEmailAndPassword, updateProfile} from "../../src/lib/export.js"

jest.mock("../../src/lib/export.js")
