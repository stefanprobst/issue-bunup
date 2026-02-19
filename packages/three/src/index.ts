import { createClient as one } from "@repo/one/client"
import { createClient as two } from "@repo/two/client"

const first = one()
first.schema.check

const second = two()
second.schema.check